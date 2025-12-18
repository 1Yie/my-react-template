export const BASE_URL = import.meta.env.DEV
	? import.meta.env.VITE_BASE_URL || 'http://localhost:9090'
	: '__VITE_BASE_URL__';
