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

function getVideoPlaylist() {
	return axios
		.get(
			'https://gist.githubusercontent.com/ax-sh/00cac0411a7bf0908ab3146e509af8dc/raw/fa16d62b6025a170c80665905e06afef2f7dfd55/mock-medias.json'
		)
		.then((res) => res.data);
}

export { getUserInfo, getAnimeInfo, getVideoPlaylist };
