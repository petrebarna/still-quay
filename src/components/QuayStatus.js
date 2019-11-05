import React, { Component } from 'react';

import Aux from '../hoc/Aux';

class QuayStatus extends Component {
  constructor(props) {
    super(props);

    this.dangerousWeathertoggler = this.dangerousWeathertoggler.bind(this);
    this.dangerousTidesToggler = this.dangerousTidesToggler.bind(this);
    this.dangerToggler = this.dangerToggler.bind(this);


    this.state = {
      danger: false,
      dangerousTides: false,
      dangerousWeather: false,
      assessForDays: [],
      

    }
  }

  dangerousWeathertoggler = (days, weatherData) => {
    // receives an array of days and the data for these days
    // toggles state.dangerousWeather to true if at least one
    // day fails the criteria
  }

  dangerousTidesToggler = (days, tidalData) => {
    // receives an array of days and the data for these days
    // toggles state.dangerousTides to true if at least one
    // day fails the criteria
  }
  
  dangerToggler = () => {
    if(this.state.dangerousTides || this.state.dangerousWeather) {
      this.setState({danger: true});
    } else {
      this.setState({danger: false});
    }
  }
  
  render() {
    let quayStatus;
    if(this.state.danger) {
      quayStatus = "in danger";
    } else {
      quayStatus = "safe"
    }

    return(
      <Aux>
        <h1>
          The quay wall is currently {quayStatus}.
          
        </h1>
      </Aux>
    );
  }
}

export default QuayStatus;