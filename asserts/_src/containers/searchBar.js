import React from 'react';
const { Component } = React;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherByAxios } from '../actions/index';
import { Button } from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            country:''
        }
        this.onCityChange = this.onCityChange.bind(this);
        this.onCountryChange = this.onCountryChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onCityChange(event) {
        this.setState({
            city: event.target.value
        });
    }

    onCountryChange(event) {
        this.setState({
            country: event.target.value
        });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeatherByAxios(this.state.city, this.state.country);
        this.setState({
            city: '',
            country: ''
        });
    }

    render() {
        return (
            <form role="form" noValidate onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="theCity">Input City: </label>
                    <input type="text" className="form-control" id="theCity" placeholder="Input City..."
                        value={this.state.city} onChange={this.onCityChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="theCountry">Input country: </label>
                    <input type="text" className="form-control" id="theCountry" placeholder="Input Country..."
                        value={this.state.country} onChange={this.onCountryChange} />
                </div>

                <Button type="submit" bsStyle="primary">Search</Button>
            </form>
        );
    }
}


let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchWeatherByAxios }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);