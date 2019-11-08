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
      heightAboveBed: null,
      wallType: 'sheet piled',
      embedmentDepth: null,
      lowestTide: null,
      wallFactor: 1,
    }
  }

  componentDidMount() {
    const heights = [];
    axios.get('http://localhost:5000/quays/' + this.props.match.params.id)
    .then(response => {
      this.setState({
        stationId: response.data.stationId,
        quayname: response.data.quayname,
        wallType: response.data.wallType,
        embedmentDepth: response.data.embedmentDepth,
        heightAboveBed: response.data.heightAboveBed
      });
      axios.get('http://localhost:5000/tides/' + this.state.stationId)
        .then(response => {
          response.data.map(tide => 
            heights.push(Math.round((tide.Height * 100)) / 100))
        this.setState({tides: heights})
        this.findLowestTide();
        this.status();
      })
      .catch(err => console.log(err))}
      )
    .catch(err => console.log(err))
  }
  

  findLowestTide = () => this.setState({ lowestTide: Math.min(...this.state.tides)});

  
  // Formula for safety check
  status = () => {
    switch(this.state.wallType){
      case "counterfort":
        this.setState({ wallFactor: 1.2});
        break;
      case "sheet piled":
        this.setState({ wallFactor: 1.1});
        break;
      case "combi-wall":
        this.setState({ wallFactor: 1.25});
        break;
      default:
        this.setState({ wallFactor: 1});
    }    
    const term1 = this.state.heightAboveBed / this.state.lowestTide;
    const term2 = this.state.heightAboveBed * this.state.wallFactor / this.state.embedmentDepth;
    if(term1 > term2) {
      this.setState({ safeToday: false })
    }
  }

  displayStatus = () => {
    if(this.state.safeToday){
      return "SAFE";
    } else {
      return "IN DANGER!";
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
          Lowest tide is {this.state.lowestTide}
        </p>
        <p>
          The {this.state.quayname} quay is currently {this.displayStatus()}
        </p>
      </div>

    );
  }
}

export default QuayStatus;