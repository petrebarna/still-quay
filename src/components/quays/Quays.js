import React, { Component } from 'react';

import Quay from './Quay';
import Aux from '../../hoc/Aux';


class Quays extends Component {
  constructor(props) {
    super(props);

    this.toggleQuays = this.toggleQuays.bind(this);


    this.state = {
      quays: [
        {
          id: 1,
          name: "Buchanan Wharf",
          location: "Glasgow City Center",
          info: "This quay wall was built by Clyde Co. in 1805."
        },
        {
          id: 2,
          name: "Bowling Marina",
          location: "Bowling - Clyde",
          info: "This quay wall was built by Esso in 1850."
        }
      ],
      quaysVisible: false,

    }
  }

  toggleQuays = () => this.setState({quaysVisible: !this.state.quaysVisible});

  render() {

    return(
      <Aux>
        <button
          onClick={this.toggleQuays}>
          Show Available Quays</button>
        {}
      </Aux>
    )
  }
}

export default Quays;