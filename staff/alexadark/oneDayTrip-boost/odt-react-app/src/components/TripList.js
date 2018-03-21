import React, { Component } from 'react';
import api from '../api'
import TripListItem  from './TripListItem'
import {
    Route
} from 'react-router-dom'


class TripList extends Component {
constructor(props) {
    super(props);
    this.state = {
        trips: []
    }
}
componentDidMount(){
    const {match: {params: {location, arrival,departure}}} = this.props //getting the parameters for listTrips from the url
    api.listTrips(location, arrival, departure)
    .then(trips => {
      this.setState({ trips });
    });
}

    render() {
        return <div className="trip-list uk-container">
            {this.state.trips.map((trip, index) => <TripListItem trip={trip} key={index}/>)}
          </div>;
    }
}

export default TripList;