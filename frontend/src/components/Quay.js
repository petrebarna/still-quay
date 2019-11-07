import React from 'react';

const quay = props => {
  return(
    <div>
      <tr>
        <td>{props.quay.quayname}</td>
        <td>{props.quay.info}</td>
        <td>{props.quay.location}</td>
        <td>Status</td>
        <td>Actions</td>
      </tr>
    </div>
  )
}

export default quay;