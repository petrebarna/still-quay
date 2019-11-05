import React from 'react';
import Box from '@material-ui/core/Box';

const quay = (props) => {
  return(
    <div>
      <body>
        <Box m={2}>       
         <h2>
            Quay name: {props.name};
          </h2>
        </Box>
        <p>
        <Box m={4}> 
            <strong>Quay wall info:</strong> {props.info}
          </Box>
        </p>
        <p>
          <Box m={4}> 
            <strong>Location:</strong> {props.location}
          </Box>
        </p>
      </body>
    </div>
  )
}

export default quay;