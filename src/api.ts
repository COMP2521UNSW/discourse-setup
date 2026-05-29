import axios from 'axios';

const api = axios.create({
	baseURL: process.env.DISCOURSE_URL!,
});

api.interceptors.request.use((config) => {
	config.headers['Cookie'] = process.env.COOKIE_HEADER;
	config.headers['X-CSRF-Token'] = process.env.CSRF_TOKEN;
	config.headers['X-Requested-With'] = 'XMLHttpRequest';
	return config;
});

export { api };
