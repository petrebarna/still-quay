import React from 'react';


const Home = (props) => {
  return(
    <div>
      <h3>Safe Quay Walls</h3>
      <p>This web app is intended to be used as a tool for monitoring the stability of quay walls as affected by the change in tides.</p>
      <p>The app uses UK Hydrographic Office - Admiralty data for tide prediction.</p>
      <p>It is important to know that the tides are predicted and not recorded.</p>
      <p>A simplified explaination of the forces acting upon a quay wall:</p>
      <p>The forces acting on the wall are in equilibrium - on the waterside, the water "balances" back the wall.</p>
      <p>If the wall is weakened due to age or overloaded, in the event of an unusually low tide,
       the quay can deform or even fail. This can present a safety threat.</p>
      <p>The app can analyse walls of three different types: counterfort, sheet piled and combi-wall.</p>
      <p>For each wall, a station from the UK Hydrographic Office should be selected. This should be as close as possible.</p>
      <p>Based on the wall characteristics and the received predicted tides, the app processes if the quay is in danger or safe.</p>
      <p><strong>The app is experimental</strong></p>
      <p>Photo by Foundry @ Pixabay</p>
    </div>


  )
}

export default Home;