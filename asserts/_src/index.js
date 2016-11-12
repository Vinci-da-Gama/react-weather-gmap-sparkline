import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import WeatherApp from './components/weather_app';
import gReducers from './reduxers';
import custJs from '../_tailoredJs/_custJs';

const createStoerWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const Utensil = document.querySelector('.container');

ReactDOM.render(
	<Provider store={createStoerWithMiddleware(gReducers)}>
		<WeatherApp />
	</Provider>, Utensil
);