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
import Tides from './components/Tides';
import TidesForPeriod from './components/TidesForPeriod';
import Follow from './components/Follow';
import QuayEntry from './components/QuayEntry';

import Background from './images/breakwater.jpg';


let Imgstyle = {
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minWidth: "88%",
  minHeight: "100vh",
  float: "left",
  backgroundImage: `url(${Background})`,
}

function App() {
  return (
    <Router>
      <div className="container" style={ Imgstyle } >
        <Navbar />
        <br />
        <Route path='/' exact component={Home} />
        <Route path='/user/account' component={Account} />
        <Route path='/quays/add' component={AddQuay} />
        <Route path='/quays/:id' component={QuayEntry} />
        <Route path='/quays' exact component={QuayList} />
        <Route path='/status/:id/' exact component={QuayStatus} /> 
        <Route path='/quays/edit/:id' component={EditQuay} />
        <Route path='/quays/follow/:id' component={Follow} />
        <Route path='/tides/:stationId' component={Tides} />
        <Route path='/quays/tides/:id/:period' component={TidesForPeriod} />
      </div>
    </Router>
  )
}

export default App;
