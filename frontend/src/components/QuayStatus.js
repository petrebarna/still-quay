import React, { Component } from 'react';

import axios from 'axios';

class QuayStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quayname: '',
      safeToday: true
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/quays/' + this.props.match.params.id + '/status/')
    .then(response => {
      this.setState({
        quayname: response.data.quayname})
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