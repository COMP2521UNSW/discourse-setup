import 'dotenv/config';

import { CATEGORIES, TEST_CATEGORIES } from './data';
import { createCategories } from './createCategories';

async function main() {
	if (!process.env.COOKIE_HEADER) {
		console.error('error: environment variable COOKIE_HEADER not set');
		process.exit(1);
	}
	if (!process.env.CSRF_TOKEN) {
		console.error('error: environment variable CSRF_TOKEN not set');
		process.exit(1);
	}
	if (!process.env.DISCOURSE_URL) {
		console.error('error: environment variable DISCOURSE_URL not set');
		process.exit(1);
	}

	await createCategories(CATEGORIES);
}

void main();
