import React from 'react';

import Layout from './components/Layout';
import QuayStatus from './components/QuayStatus';
import Quays from './components/quays/Quays';

function App() {
  return (
    <div className="App">
    <Layout>
      <QuayStatus />
      <Quays />
    </Layout>
    </div>
  );
}

export default App;
