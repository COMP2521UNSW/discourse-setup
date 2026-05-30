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

	const inheritedSettings = {
		styleType: category.styleType,
		emoji: category.emoji,
		color: category.color,
		permissions: category.permissions,
		customFields: category.customFields,
	};
	Object.assign(inheritedSettings, category.subcategorySettings);

	if (category.subcategories) {
		for (const subcategory of category.subcategories) {
			const settings = Object.assign({}, inheritedSettings, subcategory);
			Object.assign(subcategory, settings);
			await doCreateCategories(subcategory, categoryId);
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
		slug: category.slug,
		parent_category_id: parentCategoryId,
		style_type: category.styleType,
		icon: 'square-full',
		emoji: category.emoji,
		color: category.color,
		text_color: 'FFFFFF',
		permissions: category.permissions,
		custom_fields: category.customFields,
		read_only_banner: category.readOnlyBanner,
		allow_badges: true,
		category_setting_attributes: {},
		form_template_ids: [],
		required_tag_groups: [],
		topic_featured_link_allowed: true,
		minimum_required_tags: 0,
		search_priority: 0,
	};
	const cleanRequestBody = Object.fromEntries(
		Object.entries(requestBody).filter(([_, val]) => val !== undefined),
	);

	try {
		const res = await api.post('/categories', cleanRequestBody);

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
let fakeTopicId = 1001;

async function fakeCreateCategory(
	category: DiscourseCategory,
	parentCategoryId?: number,
) {
	const categoryId = fakeCategoryId;
	fakeCategoryId++;

	console.log(`Creating category '${category.name}'...`);
	console.log(`ID = ${categoryId}, parent category ID = ${parentCategoryId}`);
	const { subcategories, ...otherProperties } = category;
	console.log(otherProperties);
	console.log();

	category.topicId = fakeTopicId;
	fakeTopicId++;

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
	if (!category.description) {
		return;
	}

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

////////////////////////////////////////////////////////////////////////////////

export { setUpCategories };
