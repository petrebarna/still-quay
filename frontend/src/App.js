import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
// import CreateUser from './components/CreateUser';
import QuayStatus from './components/QuayStatus';
import QuayList from './components/QuayList';
// import AddQuay from './components/AddQuay';
import Quay from './components/Quay';
// import EditQuay from './components/EditQuay';
// import DeleteQuay from './components/DeleteQuay';
// import AllTimeTides from './components/AllTimeTides';
// import TidesForPeriod from './components/TidesForPeriod';


function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path='/' exact component={Home} />
      {/* <Route path='/user/create' component={CreateUser} /> */}
      <Route path='/status/:id'component={QuayStatus} /> 
      <Route path='/quays/' exact component={QuayList} />
      {/* <Route path='/quays/:id' exact component={Quay} />
      <Route path='/quays/:id/add' component={AddQuay} />
      <Route path='/quays/:id/edit' component={EditQuay} />
      <Route path='/quays/:id/delete' component={DeleteQuay} />
      <Route path='/quays/:id/tides' component={AllTimeTides} />
      <Route path='/quays/:id/tides/:period' component={TidesForPeriod} /> */}
    </Router>
  )
}

export default App;
