import { BASE_URL } from '@/api/urls';

/**
 * API 请求配置
 */
interface RequestConfig extends RequestInit {
	params?: Record<string, string | number | boolean>;
	timeout?: number;
}

/**
 * API 响应格式
 */
interface ApiResponse<T = unknown> {
	code: number;
	message: string;
	data: T;
}

/**
 * 请求错误类
 */
class RequestError extends Error {
	code?: number;
	response?: Response;

	constructor(message: string, code?: number, response?: Response) {
		super(message);
		this.name = 'RequestError';
		this.code = code;
		this.response = response;
	}
}

/**
 * 默认超时时间（毫秒）
 */
const DEFAULT_TIMEOUT = 10000;

/**
 * 构建完整的 URL
 */
function buildUrl(
	url: string,
	params?: Record<string, string | number | boolean>
): string {
	const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;

	if (!params || Object.keys(params).length === 0) {
		return fullUrl;
	}

	const searchParams = new URLSearchParams();
	Object.entries(params).forEach(([key, value]) => {
		searchParams.append(key, String(value));
	});

	return `${fullUrl}?${searchParams.toString()}`;
}

/**
 * 带超时的 fetch
 */
async function fetchWithTimeout(
	url: string,
	config: RequestConfig = {}
): Promise<Response> {
	const { timeout = DEFAULT_TIMEOUT, ...fetchConfig } = config;

	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort(), timeout);

	try {
		const response = await fetch(url, {
			...fetchConfig,
			signal: controller.signal,
		});
		clearTimeout(timeoutId);
		return response;
	} catch (error) {
		clearTimeout(timeoutId);
		if (error instanceof Error && error.name === 'AbortError') {
			throw new RequestError('请求超时', 408);
		}
		throw error;
	}
}

/**
 * 处理响应
 */
async function handleResponse<T>(response: Response): Promise<T> {
	if (!response.ok) {
		const errorMessage = `HTTP Error ${response.status}: ${response.statusText}`;
		throw new RequestError(errorMessage, response.status, response);
	}

	const contentType = response.headers.get('content-type');
	if (!contentType || !contentType.includes('application/json')) {
		throw new RequestError('响应格式错误，期望 JSON 格式');
	}

	const result: ApiResponse<T> = await response.json();

	// 根据业务状态码判断
	if (result.code !== 200) {
		throw new RequestError(result.message || '请求失败', result.code);
	}

	return result.data;
}

/**
 * 封装的 request 方法
 */
async function request<T = unknown>(
	url: string,
	config: RequestConfig = {}
): Promise<T> {
	const { params, headers = {}, ...restConfig } = config;

	// 构建 URL
	const fullUrl = buildUrl(url, params);

	// 默认请求头
	const defaultHeaders: HeadersInit = {
		'Content-Type': 'application/json',
		...headers,
	};

	try {
		const response = await fetchWithTimeout(fullUrl, {
			...restConfig,
			headers: defaultHeaders,
		});

		return await handleResponse<T>(response);
	} catch (error) {
		if (error instanceof RequestError) {
			throw error;
		}
		throw new RequestError(
			error instanceof Error ? error.message : '网络请求失败'
		);
	}
}

/**
 * GET 请求
 */
export function get<T = unknown>(
	url: string,
	params?: Record<string, string | number | boolean>,
	config?: Omit<RequestConfig, 'params' | 'method' | 'body'>
): Promise<T> {
	return request<T>(url, {
		...config,
		method: 'GET',
		params,
	});
}

/**
 * POST 请求
 */
export function post<T = unknown>(
	url: string,
	data?: unknown,
	config?: Omit<RequestConfig, 'method' | 'body'>
): Promise<T> {
	return request<T>(url, {
		...config,
		method: 'POST',
		body: JSON.stringify(data),
	});
}

/**
 * PUT 请求
 */
export function put<T = unknown>(
	url: string,
	data?: unknown,
	config?: Omit<RequestConfig, 'method' | 'body'>
): Promise<T> {
	return request<T>(url, {
		...config,
		method: 'PUT',
		body: JSON.stringify(data),
	});
}

/**
 * DELETE 请求
 */
export function del<T = unknown>(
	url: string,
	params?: Record<string, string | number | boolean>,
	config?: Omit<RequestConfig, 'params' | 'method' | 'body'>
): Promise<T> {
	return request<T>(url, {
		...config,
		method: 'DELETE',
		params,
	});
}

/**
 * PATCH 请求
 */
export function patch<T = unknown>(
	url: string,
	data?: unknown,
	config?: Omit<RequestConfig, 'method' | 'body'>
): Promise<T> {
	return request<T>(url, {
		...config,
		method: 'PATCH',
		body: JSON.stringify(data),
	});
}

export { RequestError };
export type { RequestConfig, ApiResponse };
