import axios from 'axios';

const baseURL = 'https://anime-facts-rest-api.herokuapp.com/api/v1';
export const instance = axios.create({
	baseURL,
	timeout: 1000,
	headers: { 'X-Custom-Header': 'foobar' },
});
function getUserInfo() {
	return instance.get('/api/user/info').then((res) => res.data);
}
function getAnimeInfo() {
	return instance.get('/fma_brotherhood/2').then((res) => res.data);
}

async function login(email: string, password: string) {
	const response = await axios.post('/api/login', {
		email,
		password,
	});
	return response.data;
}

export { getUserInfo, getAnimeInfo, login };
