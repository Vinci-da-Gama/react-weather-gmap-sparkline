import { combineReducers } from 'redux';
import WeatherReducer from './reducer_Weather';

const RootReducer = combineReducers({
	weatherCollection: WeatherReducer
});

export default RootReducer;