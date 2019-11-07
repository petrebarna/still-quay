import React from 'react';

import { Link } from 'react-router-dom';

const Quay = props => {
  return(
      <tr>
        <td>
        <Link to={"/quays/" + props.quay._id}>
        {props.quay.quayname}</Link>
        </td>
        <td>{props.quay.info}</td>
        <td>{props.quay.location}</td>
        <td>
          <Link to={"/quays/follow/" + props.quay._id}>Follow</Link>
        </td> 
      </tr>
  )
}

export default Quay;