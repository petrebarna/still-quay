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

  componentDidMount() {
    axios.get('http://localhost:5000/quays/' + this.props.match.params.id)
    .then(response => {
      this.setState({
        quayname: response.data.quayname,
        location: response.data.location,
        stationId: response.data.stationId});
        axios.get('https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations/' + this.state.stationId, 
        {'headers': {'Ocp-Apim-Subscription-Key': 'e177b65b644243f8868cd930727a86a9'}})
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
      })
    .catch(err => console.log(err))

  }
  
  

  status = () => {
    if(this.state.safeToday) {
      return "SAFE"
    } else {
      return "IN DANGER!"
    }
  }

  render() {


    return(
      <p>
        The {this.state.quayname} quay is currently {this.status()}
      </p>
    );
  }
}

export default QuayStatus;