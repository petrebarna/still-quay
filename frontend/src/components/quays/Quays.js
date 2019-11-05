import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import Aux from '../../hoc/Aux';
import AllQuays from './AllQuays';


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
    let checkQuays = null;
    if(this.state.quaysVisible){
      checkQuays = <AllQuays quays={this.state.quays} />  
    }

    return(
      <Aux>
        <Button
          variant="contained"
          color="primary"
          onClick={this.toggleQuays}>
          Show Available Quays</Button>
          {checkQuays}
      </Aux>
    )
  }
}

export default Quays;