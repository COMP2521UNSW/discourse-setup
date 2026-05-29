import type { DiscourseCategory } from './types';

// Slugs are used to refer to categories in descriptions

const SLUGS = {
	lectures: 'lectures',
	topics: 'topics',
	labs: 'labs',
	labsPrivate: 'labs-private',
	quizzes: 'quizzes',
	quizzesPrivate: 'quizzes-private',
	assignments: 'assignments',
	assignmentsPrivate: 'assignments-private',
	random: 'random',
};

/**
 * These properties are inherited by subcategories:
 * - styleType
 * - emoji
 * - color
 * - permissions
 * - customFields
 *
 * To give a parent category's subcategories different properties to the parent
 * category itself, use the subcategorySettings property
 */

const LECTURES_CATEGORY: DiscourseCategory = {
	name: 'Lectures',
	slug: SLUGS.lectures,
	description: `Use subcategories of this category to ask about lectures. Use #${SLUGS.topics} if your question is about a topic rather than the lecture itself.`,
	styleType: 'emoji',
	emoji: 'graduation_cap',
	color: '3AB54A',
	permissions: {
		everyone: 1,
	},
	subcategories: [
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
	slug: SLUGS.topics,
	description: `Use subcategories of this category to ask about a topic from this course. Use #${SLUGS.lectures} if your question is about a lecture rather than the topic itself.`,
	styleType: 'emoji',
	emoji: 'books',
	color: 'BF1E2E',
	// don't allow students to create posts under this category,
	// only subcategories
	permissions: {
		everyone: 2,
		staff: 1,
	},
	subcategories: [
		{ name: 'Recursion' },
		{ name: 'Analysis of Algorithms' },
		{ name: 'Sorting Algorithms' },
		{ name: 'Abstract Data Types' },
		{ name: 'Binary Search Trees' },
		{ name: 'Graphs' },
		{ name: 'Hash Tables' },
		{ name: 'Priority Queues and Heaps' },
		{ name: 'Tries' },
	],
	subcategorySettings: {
		permissions: { everyone: 1 },
	},
	readOnlyBanner:
		'Posting under this category has been disabled, please select a specific subcategory.',
};

const TUTORIALS_CATEGORY: DiscourseCategory = {
	name: 'Tutorials',
	description: `Use subcategories of this category to ask about tutorial content.`,
	styleType: 'emoji',
	emoji: 'open_book',
	color: 'F7941D',
	permissions: {
		everyone: 2,
		staff: 1,
	},
	subcategories: [
		{ name: 'Week 1 Tutorial' },
		{ name: 'Week 2 Tutorial' },
		{ name: 'Week 3 Tutorial' },
		{ name: 'Week 4 Tutorial' },
		{ name: 'Week 5 Tutorial' },
		{ name: 'Week 7 Tutorial' },
		{ name: 'Week 8 Tutorial' },
		{ name: 'Week 9 Tutorial' },
		{ name: 'Week 10 Tutorial' },
	],
	subcategorySettings: {
		permissions: { everyone: 1 },
	},
	readOnlyBanner:
		'Posting under this category has been disabled, please select a specific subcategory.',
};

const LABS_CATEGORIES: DiscourseCategory[] = [
	{
		name: 'Labs',
		slug: SLUGS.labs,
		description: `Use subcategories of this category to ask about lab exercises. If your post contains solution ideas or code, please use a subcategory of #${SLUGS.labsPrivate}`,
		styleType: 'emoji',
		emoji: 'test_tube',
		color: 'F1592A',
		permissions: {
			everyone: 2,
			staff: 1,
		},
		subcategories: [
			{ name: 'Week 1 Lab' },
			{ name: 'Week 2 Lab' },
			{ name: 'Week 3 Lab' },
			{ name: 'Week 4 Lab' },
			{ name: 'Week 5 Lab' },
			{ name: 'Week 7 Lab' },
			{ name: 'Week 8 Lab' },
			{ name: 'Week 9 Lab' },
			{ name: 'Extra Labs' },
		],
		subcategorySettings: {
			permissions: { everyone: 1 },
		},
		readOnlyBanner:
			'Posting under this category has been disabled, please select a specific subcategory.',
	},
	{
		name: 'Labs (Private)',
		slug: SLUGS.labsPrivate,
		description: `Use subcategories of this category to ask about lab exercises. Posts in this category are only visible to you and tutors so you can post your solution ideas and code here. Please use #${SLUGS.labs} if your post does not contain any solution ideas or code.`,
		styleType: 'emoji',
		emoji: 'test_tube',
		color: 'F1592A',
		permissions: {
			trust_level_0: 2,
			staff: 1,
		},
		customFields: {
			private_topics_enabled: true,
			private_topics_allowed_groups: '3',
		},
		subcategories: [
			{ name: 'Week 1 Lab (Private)' },
			{ name: 'Week 2 Lab (Private)' },
			{ name: 'Week 3 Lab (Private)' },
			{ name: 'Week 4 Lab (Private)' },
			{ name: 'Week 5 Lab (Private)' },
			{ name: 'Week 7 Lab (Private)' },
			{ name: 'Week 8 Lab (Private)' },
			{ name: 'Week 9 Lab (Private)' },
		],
		subcategorySettings: {
			permissions: { trust_level_0: 1 },
		},
		readOnlyBanner:
			'Posting under this category has been disabled, please select a specific subcategory.',
	},
];

const QUIZZES_CATEGORIES: DiscourseCategory[] = [
	{
		name: 'Quizzes',
		slug: SLUGS.quizzes,
		description: `Use subcategories of this category to ask about quizzes. If your post contains answers or ideas and the quiz is still ongoing, please use a subcategory of #${SLUGS.quizzesPrivate}.`,
		styleType: 'emoji',
		emoji: 'puzzle_piece',
		color: '652D90',
		permissions: {
			everyone: 2,
			staff: 1,
		},
		subcategories: [
			{ name: 'Quiz 1' },
			{ name: 'Quiz 2' },
			{ name: 'Quiz 3' },
			{ name: 'Quiz 4' },
			{ name: 'Quiz 5' },
			{ name: 'Quiz 6' },
			{ name: 'Quiz 7' },
			{ name: 'Quiz 8' },
		],
		subcategorySettings: {
			permissions: { everyone: 1 },
		},
		readOnlyBanner:
			'Posting under this category has been disabled, please select a specific subcategory.',
	},
	{
		name: 'Quizzes (Private)',
		slug: SLUGS.quizzesPrivate,
		description: `Use subcategories of this category to ask about quizzes. Posts in this category are only visible to you and tutors so you can post your answers and ideas here. Please use #${SLUGS.quizzes} if your post does not contain any answers or ideas.`,
		styleType: 'emoji',
		emoji: 'puzzle_piece',
		color: '652D90',
		permissions: {
			trust_level_0: 2,
			staff: 1,
		},
		customFields: {
			private_topics_enabled: true,
			private_topics_allowed_groups: '3',
		},
		subcategories: [
			{ name: 'Quiz 1 (Private)' },
			{ name: 'Quiz 2 (Private)' },
			{ name: 'Quiz 3 (Private)' },
			{ name: 'Quiz 4 (Private)' },
			{ name: 'Quiz 5 (Private)' },
			{ name: 'Quiz 6 (Private)' },
			{ name: 'Quiz 7 (Private)' },
			{ name: 'Quiz 8 (Private)' },
		],
		subcategorySettings: {
			permissions: { trust_level_0: 1 },
		},
		readOnlyBanner:
			'Posting under this category has been disabled, please select a specific subcategory.',
	},
];

const ASSIGNMENTS_CATEGORIES: DiscourseCategory[] = [
	{
		name: 'Assignments',
		slug: SLUGS.assignments,
		description: `Use subcategories of this category to ask about assignments. If your post contains solution ideas or code, please use a subcategory of #${SLUGS.assignmentsPrivate}.`,
		styleType: 'emoji',
		emoji: 'laptop',
		color: '0DFFF3',
		permissions: {
			everyone: 2,
			staff: 1,
		},
		subcategories: [
			{ name: 'Assignment 1' }, //
			{ name: 'Assignment 2' },
		],
		subcategorySettings: {
			permissions: { everyone: 1 },
		},
		readOnlyBanner:
			'Posting under this category has been disabled, please select a specific subcategory.',
	},
	{
		name: 'Assignments (Private)',
		slug: SLUGS.assignmentsPrivate,
		description: `Use subcategories of this category to ask about assignments. Posts in this category are only visible to you and tutors so you can post your solution ideas and code here. Please use #${SLUGS.assignments} if your post does not contain any solution ideas or code.`,
		styleType: 'emoji',
		emoji: 'laptop',
		color: '0DFFF3',
		permissions: {
			trust_level_0: 2,
			staff: 1,
		},
		customFields: {
			private_topics_enabled: true,
			private_topics_allowed_groups: '3',
		},
		subcategories: [
			{ name: 'Assignment 1 (Private)' },
			{ name: 'Assignment 2 (Private)' },
		],
		subcategorySettings: {
			permissions: { trust_level_0: 1 },
		},
		readOnlyBanner:
			'Posting under this category has been disabled, please select a specific subcategory.',
	},
];

const EXAM_CATEGORY: DiscourseCategory = {
	name: 'Exam',
	description: `Use subcategories of this category to ask about the final exam, sample exam and past exams.`,
	styleType: 'emoji',
	emoji: 'memo',
	color: 'ED207B',
	permissions: {
		everyone: 2,
		staff: 1,
	},
	subcategories: [
		{ name: 'Final Exam' },
		{ name: 'Sample Exam' },
		{ name: 'Past Exams' },
	],
	subcategorySettings: {
		permissions: { everyone: 1 },
	},
	readOnlyBanner:
		'Posting under this category has been disabled, please select a specific subcategory.',
};

const HELP_SESSIONS_CATEGORY: DiscourseCategory = {
	name: 'Help Sessions',
	description: `Use this category to ask about help sessions.`,
	styleType: 'emoji',
	emoji: 'ring_buoy',
	color: '12A89D',
	permissions: {
		everyone: 1,
	},
};

const PRACTICE_EXERCISES_CATEGORY: DiscourseCategory = {
	name: 'Practice Exercises',
	description: `Use this category to ask about practice exercises.`,
	styleType: 'emoji',
	emoji: 'flexed_biceps',
	color: '9EB83B',
	permissions: {
		everyone: 1,
	},
};

const MISCELLANEOUS_CATEGORY: DiscourseCategory = {
	name: 'Miscellaneous',
	description: `Use subcategories of this category to ask miscellaneous questions about the course.`,
	styleType: 'emoji',
	emoji: 'leaf_fluttering_in_wind',
	color: '8C6238',
	permissions: {
		everyone: 2,
		staff: 1,
	},
	subcategories: [
		{
			name: 'Course Website',
			description: `Use this category to ask or raise issues about the course website, e.g., if you're unable to access the website.`,
			emoji: 'globe_with_meridians',
		},
		{
			name: 'Technical Help',
			description: `Use this category to get general technical help, e.g., advice on home computing.`,
			emoji: 'desktop_computer',
		},
		{
			name: 'Other',
			description: `Use this category to ask other miscellaneous questions about the course. Please use #${SLUGS.random} for anything unrelated to the course.`,
			emoji: 'star',
		},
	],
	subcategorySettings: {
		permissions: { everyone: 1 },
	},
	readOnlyBanner:
		'Posting under this category has been disabled, please select a specific subcategory.',
};

const RANDOM_CATEGORY: DiscourseCategory = {
	name: 'Random',
	slug: SLUGS.random,
	description: `Use this category to post about anything unrelated to the course!`,
	styleType: 'emoji',
	emoji: 'game_die',
	color: '92278F',
	permissions: {
		everyone: 1,
	},
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

////////////////////////////////////////////////////////////////////////////////
// Fakes for testing

const TEST_SLUGS = {
	testCategory1: 'test-1',
	testCategory2: 'test-2',
};

const TEST_CATEGORY_1: DiscourseCategory = {
	name: 'Test Category 1',
	slug: TEST_SLUGS.testCategory1,
	description: `This is the description for Test Category 1. Please see #${TEST_SLUGS.testCategory2} for more details.`,
	styleType: 'emoji',
	emoji: 'pizza',
	color: '92278F',
	permissions: {
		everyone: 1,
	},
};

const TEST_CATEGORY_2: DiscourseCategory = {
	name: 'Test Category 2',
	slug: TEST_SLUGS.testCategory2,
	description: `This is the description for Test Category 2. Please see #${TEST_SLUGS.testCategory1} for more details.`,
	styleType: 'emoji',
	emoji: 'hamburger',
	color: '92278F',
	permissions: {
		everyone: 1,
	},
};

const TEST_CATEGORIES = [TEST_CATEGORY_1, TEST_CATEGORY_2];

////////////////////////////////////////////////////////////////////////////////

export { CATEGORIES, TEST_CATEGORIES };
