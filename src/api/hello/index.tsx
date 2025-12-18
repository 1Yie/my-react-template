import { get } from '@/api/request';
import { urls } from '@/api/urls';

export async function fetchHelloWorldTemplate() {
	return get<string>(urls.helloWorld.template);
}
