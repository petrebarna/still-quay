import React, { Component } from 'react';

import axios from 'axios';

class QuayStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quayname: '',
      stationId: '',
      safeToday: true,
      tides:[],
      stationCoordinates: '',
      stationName:'',
    }
  }

  componentDidMount() {
    const heights = [];
    axios.get('http://localhost:5000/quays/' + this.props.match.params.id)
    .then(response => {
      this.setState({
        stationId: response.data.stationId,
        quayname: response.data.quayname,
      });
      axios.get('http://localhost:5000/tides/' + this.state.stationId)
        .then(response => {
          response.data.map(tide => 
            heights.push(Math.round((tide.Height * 100)) / 100))
        this.setState({tides: heights})})
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

  // prepTides = () => {
  //   const stringTides = this.state.tides.join();
  //   let preparedTides = '';
  //   for(let c in stringTides.length){
  //     if(stringTides.charAt(c) === ','){
  //       preparedTides =+ ' _, ';
  //     } else {
  //       preparedTides =+ c;
  //     }
  //   }
  //   return preparedTides;
  // }



  render() {

    return(
      <div>
        <h3>{this.state.quayname}</h3>
        <p>
          Tides {this.state.tides.join()}
        </p>
        <p>
          The {this.state.quayname} quay is currently {this.status()}
        </p>
      </div>

    );
  }
}

export default QuayStatus;