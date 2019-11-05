import React from 'react';

const quay = (props) => {
  return(
    <div>
      <head>
        <h2>
          Quay name: {props.quayName};
        </h2>
      </head>
      <body>
        <h3>
          Quay wall info: {props.quayInfo};
        </h3>
        <p>
          Location: ---add location on Google Maps---
        </p>
      </body>
    </div>
  )
}

export default quay;