import axios from 'axios';

import type { DiscourseCategory } from './types';

async function createCategories(categories: DiscourseCategory[], url: string) {
	for (const category of categories) {
		await doCreateCategories(category, url);
	}
}

async function doCreateCategories(
	category: DiscourseCategory,
	url: string,
	parentCategoryId?: number,
) {
	const categoryId = await createCategory(category, url, parentCategoryId);

	const inheritableProperties = {
		...(category.color ? { color: category.color } : {}),
		...(category.permissions ? { permissions: category.permissions } : {}),
		...(category.customFields ? { customFields: category.customFields } : {}),
		...(category.styleType ? { styleType: category.styleType } : {}),
		...(category.emoji ? { emoji: category.emoji } : {}),
	};

	if (category.childCategories) {
		for (const childCategory of category.childCategories) {
			await doCreateCategories(
				{ ...inheritableProperties, ...childCategory },
				url,
				categoryId,
			);
		}
	}
}

async function createCategory(
	category: DiscourseCategory,
	url: string,
	parentCategoryId?: number,
) {
	// return await fakeCreateCategory(category, url, parentCategoryId);

	const requestBody = {
		name: category.name,
		...(category.color ? { color: category.color } : {}),
		text_color: 'FFFFFF',
		...(category.permissions ? { permissions: category.permissions } : {}),
		...(parentCategoryId ? { parent_category_id: parentCategoryId } : {}),
		allow_badges: true,
		category_setting_attributes: {},
		custom_fields: category.customFields ?? {},
		form_template_ids: [],
		required_tag_groups: [],
		topic_featured_link_allowed: true,
		minimum_required_tags: 0,
		search_priority: 0,
		...(category.styleType ? { style_type: category.styleType } : {}),
		...(category.emoji ? { emoji: category.emoji } : {}),
		icon: 'square-full',
	};

	try {
		const res = await axios.post(url, requestBody, {
			headers: {
				Cookie: process.env.COOKIE_HEADER,
				'X-CSRF-Token': process.env.CSRF_TOKEN,
				'X-Requested-With': 'XMLHttpRequest',
			},
		});

		console.log(`✅ created category '${category.name}'`);
		return res.data.category.id as number;
	} catch (err) {
		console.log(
			`⚠️ encountered error while creating category '${category.name}'`,
		);
		console.log(err);
		process.exit(1);
	}
}

////////////////////////////////////////////////////////////////////////////////

let fakeCategoryId = 1;

async function fakeCreateCategory(
	{ childCategories, ...category }: DiscourseCategory,
	url: string,
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

export { createCategories };
