import type { AxiosResponse } from 'axios';

import { api } from './api';
import type { DiscourseCategory } from './types';

////////////////////////////////////////////////////////////////////////////////

async function setUpCategories(categories: DiscourseCategory[]) {
	await createCategories(categories);
	await editDescriptions(categories);
}

////////////////////////////////////////////////////////////////////////////////

async function createCategories(categories: DiscourseCategory[]) {
	console.log(`ℹ️ creating categories`);

	for (const category of categories) {
		await doCreateCategories(category);
	}

	console.log();
}

async function doCreateCategories(
	category: DiscourseCategory,
	parentCategoryId?: number,
) {
	const categoryId = await createCategory(category, parentCategoryId);

	const inheritableSettings = {
		...(category.color ? { color: category.color } : {}),
		...(category.permissions ? { permissions: category.permissions } : {}),
		...(category.customFields ? { customFields: category.customFields } : {}),
		...(category.styleType ? { styleType: category.styleType } : {}),
		...(category.emoji ? { emoji: category.emoji } : {}),
	};

	if (category.subcategories) {
		const subcategorySettings = {
			...inheritableSettings,
			...category.subcategorySettings,
		};
		for (const subcategory of category.subcategories) {
			await doCreateCategories(
				{
					...subcategorySettings,
					...subcategory,
				},
				categoryId,
			);
		}
	}
}

async function createCategory(
	category: DiscourseCategory,
	parentCategoryId?: number,
) {
	// return await fakeCreateCategory(category, parentCategoryId);

	const requestBody = {
		name: category.name,
		...(category.slug ? { slug: category.slug } : {}),
		...(parentCategoryId ? { parent_category_id: parentCategoryId } : {}),
		...(category.styleType ? { style_type: category.styleType } : {}),
		icon: 'square-full',
		...(category.emoji ? { emoji: category.emoji } : {}),
		...(category.color ? { color: category.color } : {}),
		text_color: 'FFFFFF',
		...(category.permissions ? { permissions: category.permissions } : {}),
		...(category.readOnlyBanner
			? { read_only_banner: category.readOnlyBanner }
			: {}),
		custom_fields: category.customFields ?? {},
		allow_badges: true,
		category_setting_attributes: {},
		form_template_ids: [],
		required_tag_groups: [],
		topic_featured_link_allowed: true,
		minimum_required_tags: 0,
		search_priority: 0,
	};

	try {
		const res = await api.post('/categories', requestBody);

		console.log(`✅ created category '${category.name}'`);

		category.topicId = Number(res.data.category.topic_url.split('/').at(-1));
		return res.data.category.id as number;
	} catch (err) {
		console.log(
			`⚠️ encountered error while creating category '${category.name}'`,
		);
		console.log(err);
		process.exit(1);
	}
}

/////////////////////
// Fake for testing

let fakeCategoryId = 1;

async function fakeCreateCategory(
	{ subcategories, ...category }: DiscourseCategory,
	parentCategoryId?: number,
) {
	const categoryId = fakeCategoryId;
	fakeCategoryId++;

	console.log(`Creating category '${category.name}'...`);
	console.log(`ID = ${categoryId}, parent category ID = ${parentCategoryId}`);
	console.log(category);
	console.log();

	return categoryId;
}

////////////////////////////////////////////////////////////////////////////////

async function editDescriptions(categories: DiscourseCategory[]) {
	console.log(`ℹ️ editing descriptions`);

	for (const category of categories) {
		await doEditDescriptions(category);
	}

	console.log();
}

async function doEditDescriptions(category: DiscourseCategory) {
	await editDescription(category);

	if (category.subcategories) {
		for (const subcategory of category.subcategories) {
			await doEditDescriptions(subcategory);
		}
	}
}

async function editDescription(category: DiscourseCategory) {
	if (category.description) {
		const topicId = category.topicId!;

		let res: AxiosResponse<any, any, {}>;
		try {
			res = await api.get(`/t/${topicId}/1.json`);
		} catch (err) {
			console.log(
				`⚠️ encountered error while getting topic for category '${category.name}'`,
			);
			console.log(err);
			process.exit(1);
		}

		const postId = res.data.post_stream.posts[0].id as number;

		const formData = new FormData();
		formData.append('post[raw]', category.description);
		formData.append('post[topic_id]', topicId.toString());

		try {
			await api.put(`/posts/${postId}`, formData);

			console.log(`✅ edit description for category '${category.name}'`);
		} catch (err) {
			console.log(
				`⚠️ encountered error while editing description for category '${category.name}'`,
			);
			console.log(err);
			process.exit(1);
		}
	}
}

////////////////////////////////////////////////////////////////////////////////

export { setUpCategories };
