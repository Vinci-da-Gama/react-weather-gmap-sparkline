import axios from 'axios';

const API_KEY = '5334d4f1a407962d72dbec209051a3e1';
const WEATHER_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER_TYPE';

export function fetchWeatherByAxios(city, country) {
	const ccUrl = `${WEATHER_ROOT_URL}&q=${city},${country}`;
	let request = axios.get(ccUrl);
	console.log('11 -- request: ', request);

	return {
		type: FETCH_WEATHER,
		weatherLoad: request
	};
}