import React, { Component } from 'react';

import axios from 'axios';

class QuayStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quayname: '',
      location: '',
      stationId: '',
      safeToday: true,
      tides:[],
      stationCoordinates: '',
      stationName:'',
      stationCountry: ''
    }
  }

  // the tides are requested from here, but are pulled from admiralty from the BE and returned here.
  componentDidMount() {
    axios.get('http://localhost:5000/quays/' + this.props.match.params.id)
    .then(response => {
      this.setState({stationId: response.data.stationId});
      axios.get('http://localhost:5000/tides/' + this.state.stationId)
        .then(response => {
        this.setState({tides: response.data})})
      .catch(err => console.log(err))}
      )
    .catch(err => console.log(err))
  }
  
  

  status = () => {
    if(this.state.safeToday) {
      return "SAFE"
    } else {
      return "IN DANGER!"
    }
  }

  tides = () => {
    const heights = [];
    this.state.tides.map(tide => 
      heights.push(Math.round((tide.Height * 100)) / 100)
    )
    return heights.join();
  }

  render() {

    return(
      <div>
        <p>
          Tides {this.tides()}
        </p>
        <p>
          The {this.state.quayname} quay is currently {this.status()}
        </p>
      </div>

    );
  }
}

export default QuayStatus;