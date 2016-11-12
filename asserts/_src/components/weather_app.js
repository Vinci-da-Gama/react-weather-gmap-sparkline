import React from 'react';
const { Component } = React;
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weather_list';

class WeatherApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            	<SearchBar />
                <WeatherList />
            </div>
        );
    }
}

export default WeatherApp;
