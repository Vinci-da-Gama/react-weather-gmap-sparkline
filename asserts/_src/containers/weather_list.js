import React from 'react';
const { Component } = React;
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import Gmap from '../components/GoogleMapLocation';

class WeatherList extends Component {
    constructor(props) {
        super(props);
    }


    renderTdContent(responseData) {
        const name         = responseData.city.name;
        // standard way to write return;
        const temps        = responseData.list.map((weatherArgument) => { return weatherArgument.main.temp; });
        // quick way to write return;
        const pressures    = responseData.list.map((weatherArgument) => weatherArgument.main.pressure);
        const humidities   = responseData.list.map((weatherArgument) => weatherArgument.main.humidity);
        const { lon, lat } = responseData.city.coord;
        console.log('22 -- responseData is: ', responseData);
        
		if(!responseData) {
        	return (
        		<div className="loader-utensil">
        			<div className="sk-folding-cube">
						<div className="sk-cube1 sk-cube"></div>
						<div className="sk-cube2 sk-cube"></div>
						<div className="sk-cube4 sk-cube"></div>
						<div className="sk-cube3 sk-cube"></div>
					</div>
        		</div>
			);
        }
        return (
			<tr key={name}>
				<td className="google-maptd">
					<Gmap markers={responseData.city.coord} cityname={name} lon={ lon } lat={ lat } />
				</td>
				<td>
					<Chart ary={temps} color="orange" unit = "K" />
				</td>
				<td>
					<Chart ary={pressures} color="blue" unit = "hPa" />
				</td>
				<td>
					<Chart ary={humidities} color="green" unit = "%" />
				</td>
			</tr>
		);
    }

    render() {

        return (
            <div className="table-responsive">
				<table className="table table-hover">
					<thead>
						<tr>
							<th>GoogleMap</th>
	                        <th>Temperature(K)</th>
	                        <th>Pressure(hPa)</th>
	                        <th>Humidity( % )</th>
						</tr>
					</thead>
					<tbody>
						{this.props.propWeather.map(this.renderTdContent)}
					</tbody>
				</table>
			</div>
        );
    }
}

function mapStateToProps({weatherCollection}) {
	console.log('60 -- weatherCollection is: ', weatherCollection);
	return {propWeather: weatherCollection};
}

export default connect(mapStateToProps)(WeatherList);
