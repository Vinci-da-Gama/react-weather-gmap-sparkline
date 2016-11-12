import { FETCH_WEATHER } from '../actions/index';

export default (state=[], action) => {
	switch(action.type) {
		case FETCH_WEATHER: 
		return [action.weatherLoad.data, ...state]
	}
	return state;
}