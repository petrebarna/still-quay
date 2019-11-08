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
    console.log(this.state.stationId);
    axios.get('http://localhost:5000/quays/' + this.props.match.params.id)
    .then(response => {
      this.setState({stationId: response.data.stationId})
      console.log(this.state.stationId);
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

  onClick = (e) => {
    e.preventDefault();
    console.log(this.state.stationId);
    axios.get('http://localhost:5000/tides/' + this.state.stationId)
      .then(response => this.setState({tides: response}))
      .catch(err => console.log(err));
  }

  
  render() {


    return(
      <div>
        <button onClick={this.onClick}>
          Show Tides
        </button>
        <p>
          These are the tides {this.state.tides.map(t => console.log(t))}
        </p>
        <p>
          The {this.state.quayname} quay is currently {this.status()}
        </p>
      </div>

    );
  }
}

export default QuayStatus;