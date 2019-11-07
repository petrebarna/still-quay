import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Account from './components/Account';
import QuayStatus from './components/QuayStatus';
import QuayList from './components/QuayList';
import AddQuay from './components/AddQuay';
import EditQuay from './components/EditQuay';
import AllTimeTides from './components/AllTimeTides';
import TidesForPeriod from './components/TidesForPeriod';
import Follow from './components/Follow';
import QuayEntry from './components/QuayEntry';


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path='/' exact component={Home} />
        <Route path='/user/account' component={Account} />
        <Route path='/status/:id/' exact component={QuayStatus} /> 
        <Route path='/quays' exact component={QuayList} />
        <Route path='/quays/:id' exact component={QuayEntry} />
        <Route path='/quays/add' component={AddQuay} />
        <Route path='/quays/edit/:id' component={EditQuay} />
        <Route path='/quays/follow/:id' component={Follow} />
        <Route path='/quays/tides/:id' exact component={AllTimeTides} />
        <Route path='/quays/tides/:id/:period' component={TidesForPeriod} />
      </div>
    </Router>
  )
}

export default App;
