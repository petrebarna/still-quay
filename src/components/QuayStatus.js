import React, { Component } from 'react';

import Aux from '../hoc/Aux';

class QuayStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      danger: false,
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