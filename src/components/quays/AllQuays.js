import React from 'react';

import Aux from '../../hoc/Aux';
import Quay from './Quay';

const allQuays = (props) => (
  <Aux>
    {props.quays.map(q => { 
      return <Quay 
        key={q.id}
        name={q.name}
        location={q.location}
        info={q.info}/>
      })
    }
  </Aux>
);

export default allQuays;