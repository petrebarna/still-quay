import React from 'react';

import Aux from '../hoc/Aux';

const layout = (props) => (
  <Aux>
    <div>Home, About, Support, Account</div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;