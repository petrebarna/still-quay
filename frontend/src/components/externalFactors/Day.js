import React from 'react';

import Aux from '../../hoc/Aux';

const day = (props) => (
  //takes a day as props and returns the weather and tides for that day
  <Aux>
    Weather and tides for {props.children}
  </Aux>
)




export default day;