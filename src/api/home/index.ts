import { get } from '@/api/request';

export function GetGeomagneticData() {
	return get('/geomagnetic_data');
}
