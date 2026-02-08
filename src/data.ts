import type { DiscourseCategory } from './types';

// All properties of a category are inherited by its children except for name

const LECTURES_CATEGORY: DiscourseCategory = {
	name: 'Lectures',
	color: '3AB54A',
	permissions: {
		everyone: 1,
	},
	styleType: 'emoji',
	emoji: 'graduation_cap',
	childCategories: [
		{ name: 'Week 1 Lectures' },
		{ name: 'Week 2 Lectures' },
		{ name: 'Week 3 Lectures' },
		{ name: 'Week 4 Lectures' },
		{ name: 'Week 5 Lectures' },
		{ name: 'Week 7 Lectures' },
		{ name: 'Week 8 Lectures' },
		{ name: 'Week 9 Lectures' },
		{ name: 'Week 10 Lectures' },
	],
};

const TOPICS_CATEGORY: DiscourseCategory = {
	name: 'Topics',
	color: 'BF1E2E',
	// don't allow students to create posts under this category,
	// only subcategories
	permissions: {
		everyone: 2,
		staff: 1,
	},
	styleType: 'emoji',
	emoji: 'books',
	childCategories: [
		{ permissions: { everyone: 1 }, name: 'Recursion' },
		{ permissions: { everyone: 1 }, name: 'Analysis of Algorithms' },
		{ permissions: { everyone: 1 }, name: 'Sorting Algorithms' },
		{ permissions: { everyone: 1 }, name: 'Abstract Data Types' },
		{ permissions: { everyone: 1 }, name: 'Binary Search Trees' },
		{ permissions: { everyone: 1 }, name: 'Graphs' },
		{ permissions: { everyone: 1 }, name: 'Hash Tables' },
		{ permissions: { everyone: 1 }, name: 'Priority Queues and Heaps' },
		{ permissions: { everyone: 1 }, name: 'Tries' },
	],
};

const TUTORIALS_CATEGORY: DiscourseCategory = {
	name: 'Tutorials',
	color: 'F7941D',
	permissions: {
		everyone: 2,
		staff: 1,
	},
	styleType: 'emoji',
	emoji: 'open_book',
	childCategories: [
		{ name: 'Week 1 Tutorial', permissions: { everyone: 1 } },
		{ name: 'Week 2 Tutorial', permissions: { everyone: 1 } },
		{ name: 'Week 3 Tutorial', permissions: { everyone: 1 } },
		{ name: 'Week 4 Tutorial', permissions: { everyone: 1 } },
		{ name: 'Week 5 Tutorial', permissions: { everyone: 1 } },
		{ name: 'Week 7 Tutorial', permissions: { everyone: 1 } },
		{ name: 'Week 8 Tutorial', permissions: { everyone: 1 } },
		{ name: 'Week 9 Tutorial', permissions: { everyone: 1 } },
		{ name: 'Week 10 Tutorial', permissions: { everyone: 1 } },
	],
};

const LABS_CATEGORIES: DiscourseCategory[] = [
	{
		name: 'Labs',
		color: 'F1592A',
		permissions: {
			everyone: 2,
			staff: 1,
		},
		styleType: 'emoji',
		emoji: 'test_tube',
		childCategories: [
			{ name: 'Week 1 Lab', permissions: { everyone: 1 } },
			{ name: 'Week 2 Lab', permissions: { everyone: 1 } },
			{ name: 'Week 3 Lab', permissions: { everyone: 1 } },
			{ name: 'Week 4 Lab', permissions: { everyone: 1 } },
			{ name: 'Week 5 Lab', permissions: { everyone: 1 } },
			{ name: 'Week 7 Lab', permissions: { everyone: 1 } },
			{ name: 'Week 8 Lab', permissions: { everyone: 1 } },
			{ name: 'Week 9 Lab', permissions: { everyone: 1 } },
			{ name: 'Extra Labs', permissions: { everyone: 1 } },
		],
	},
	{
		name: 'Labs (Private)',
		color: 'F1592A',
		permissions: {
			trust_level_0: 2,
			staff: 1,
		},
		customFields: {
			private_topics_enabled: true,
			private_topics_allowed_groups: '3',
		},
		styleType: 'emoji',
		emoji: 'test_tube',
		childCategories: [
			{ name: 'Week 1 Lab (Private)', permissions: { trust_level_0: 1 } },
			{ name: 'Week 2 Lab (Private)', permissions: { trust_level_0: 1 } },
			{ name: 'Week 3 Lab (Private)', permissions: { trust_level_0: 1 } },
			{ name: 'Week 4 Lab (Private)', permissions: { trust_level_0: 1 } },
			{ name: 'Week 5 Lab (Private)', permissions: { trust_level_0: 1 } },
			{ name: 'Week 7 Lab (Private)', permissions: { trust_level_0: 1 } },
			{ name: 'Week 8 Lab (Private)', permissions: { trust_level_0: 1 } },
			{ name: 'Week 9 Lab (Private)', permissions: { trust_level_0: 1 } },
		],
	},
];

const QUIZZES_CATEGORIES: DiscourseCategory[] = [
	{
		name: 'Quizzes',
		color: '652D90',
		permissions: {
			everyone: 2,
			staff: 1,
		},
		styleType: 'emoji',
		emoji: 'puzzle_piece',
		childCategories: [
			{ name: 'Quiz 1', permissions: { everyone: 1 } },
			{ name: 'Quiz 2', permissions: { everyone: 1 } },
			{ name: 'Quiz 3', permissions: { everyone: 1 } },
			{ name: 'Quiz 4', permissions: { everyone: 1 } },
			{ name: 'Quiz 5', permissions: { everyone: 1 } },
			{ name: 'Quiz 6', permissions: { everyone: 1 } },
			{ name: 'Quiz 7', permissions: { everyone: 1 } },
			{ name: 'Quiz 8', permissions: { everyone: 1 } },
		],
	},
	{
		name: 'Quizzes (Private)',
		color: '652D90',
		permissions: {
			trust_level_0: 2,
			staff: 1,
		},
		customFields: {
			private_topics_enabled: true,
			private_topics_allowed_groups: '3',
		},
		styleType: 'emoji',
		emoji: 'puzzle_piece',
		childCategories: [
			{ name: 'Quiz 1 (Private)', permissions: { trust_level_0: 1 } },
			{ name: 'Quiz 2 (Private)', permissions: { trust_level_0: 1 } },
			{ name: 'Quiz 3 (Private)', permissions: { trust_level_0: 1 } },
			{ name: 'Quiz 4 (Private)', permissions: { trust_level_0: 1 } },
			{ name: 'Quiz 5 (Private)', permissions: { trust_level_0: 1 } },
			{ name: 'Quiz 6 (Private)', permissions: { trust_level_0: 1 } },
			{ name: 'Quiz 7 (Private)', permissions: { trust_level_0: 1 } },
			{ name: 'Quiz 8 (Private)', permissions: { trust_level_0: 1 } },
		],
	},
];

const ASSIGNMENTS_CATEGORIES: DiscourseCategory[] = [
	{
		name: 'Assignments',
		color: '0DFFF3',
		permissions: {
			everyone: 2,
			staff: 1,
		},
		styleType: 'emoji',
		emoji: 'laptop',
		childCategories: [
			{ name: 'Assignment 1', permissions: { everyone: 1 } }, //
			{ name: 'Assignment 2', permissions: { everyone: 1 } },
		],
	},
	{
		name: 'Assignments (Private)',
		color: '0DFFF3',
		permissions: {
			trust_level_0: 2,
			staff: 1,
		},
		customFields: {
			private_topics_enabled: true,
			private_topics_allowed_groups: '3',
		},
		styleType: 'emoji',
		emoji: 'laptop',
		childCategories: [
			{ name: 'Assignment 1 (Private)', permissions: { trust_level_0: 1 } },
			{ name: 'Assignment 2 (Private)', permissions: { trust_level_0: 1 } },
		],
	},
];

const EXAM_CATEGORY: DiscourseCategory = {
	name: 'Exam',
	color: 'ED207B',
	permissions: {
		everyone: 2,
		staff: 1,
	},
	styleType: 'emoji',
	emoji: 'memo',
	childCategories: [
		{ name: 'Final Exam', permissions: { everyone: 1 } },
		{ name: 'Sample Exam', permissions: { everyone: 1 } },
		{ name: 'Past Exams', permissions: { everyone: 1 } },
	],
};

const HELP_SESSIONS_CATEGORY: DiscourseCategory = {
	name: 'Help Sessions',
	color: '12A89D',
	permissions: {
		everyone: 1,
	},
	styleType: 'emoji',
	emoji: 'handshake',
};

const PRACTICE_EXERCISES_CATEGORY: DiscourseCategory = {
	name: 'Practice Exercises',
	color: '9EB83B',
	permissions: {
		everyone: 1,
	},
	styleType: 'emoji',
	emoji: 'flexed_biceps',
};

const MISCELLANEOUS_CATEGORY: DiscourseCategory = {
	name: 'Miscellaneous',
	color: '8C6238',
	permissions: {
		everyone: 2,
		staff: 1,
	},
	styleType: 'emoji',
	emoji: 'leaf_fluttering_in_wind',
	childCategories: [
		{
			name: 'Course Website',
			permissions: { everyone: 1 },
			emoji: 'globe_with_meridians',
		},
		{
			name: 'Home Computing',
			permissions: { everyone: 1 },
			emoji: 'desktop_computer',
		},
		{
			name: 'Other',
			permissions: { everyone: 1 },
			emoji: 'star',
		},
	],
};

const RANDOM_CATEGORY: DiscourseCategory = {
	name: 'Random',
	color: '92278F',
	permissions: {
		everyone: 1,
	},
	styleType: 'emoji',
	emoji: 'game_die',
};

const CATEGORIES: DiscourseCategory[] = [
	LECTURES_CATEGORY,
	TOPICS_CATEGORY,
	TUTORIALS_CATEGORY,
	...LABS_CATEGORIES,
	...QUIZZES_CATEGORIES,
	...ASSIGNMENTS_CATEGORIES,
	EXAM_CATEGORY,
	HELP_SESSIONS_CATEGORY,
	PRACTICE_EXERCISES_CATEGORY,
	MISCELLANEOUS_CATEGORY,
	RANDOM_CATEGORY,
];

export { CATEGORIES };
