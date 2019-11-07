import React from 'react';

import { Link } from 'react-router-dom';

const quay = props => {
  return(
    <div>
      <tr>
        <td>{props.quay.quayname}</td>
        <td>{props.quay.info}</td>
        <td>{props.quay.location}</td>
        <td>
          <Link to={"/status/" + props.quay._id}></Link>
        </td>
        <td>
          <Link to={"/quays/edit/" + props.quay._id}>edit</Link> | 
          <Link to={"/quays/follow/" + props.quay._id}>follow</Link>
        </td>
      </tr>
    </div>
  )
}

export default quay;