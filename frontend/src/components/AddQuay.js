import React, { Component } from 'react';

import axios from 'axios';

class AddQuay extends Component {
  constructor(props){
    super(props);

    this.state = {
      quayname: '',
      info: '',
      location: '',
      stationId: '',
      wallType: '',
      embedmentDepth: null,
      heightAboveBed: null,

    }
  }

  onChangeQuayname = (e) => {
    this.setState({
      quayname: e.target.value
    })
  }

  onChangeInfo = (e) => {
    this.setState({
      info: e.target.value
    })
  }

  onChangeLocation = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  onChangeStationId = (e) => {
    this.setState({
      stationId: e.target.value
    })
  }

  onChangeWallType = (e) => {
    this.setState({
      wallType: e.target.value
    })
  }

  onChangeEmbedmentDepth = (e) => {
    this.setState({
      embedmentDepth: e.target.value
    })
  }

  onChangeHeightAboveBed = (e) => {
    this.setState({
      heightAboveBed: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const quay = {
      quayname: this.state.quayname,
      info: this.state.info,
      location: this.state.location,
      stationId: this.state.stationId
    }

    axios.post('http://localhost:5000/quays/add', quay)
      .then(response => alert(response.data))
      .catch(err => console.log(err));
    
    
  }

  render () {

    return (
      <div>
      <h3>Add Quay for Monitoring</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Quay Name </label>
          <input type="text"
              required
              className="form-control"
              onChange={this.onChangeQuayname} />
        </div>
        <div className="form-group"> 
          <label>Info </label>
          <input  type="text"
              className="form-control"
              onChange={this.onChangeInfo}
              />
        </div>
        <div className="form-group">
          <label>Location (Coordinates - lat, long) </label>
          <input 
              type="text" 
              className="form-control"
              onChange={this.onChangeLocation}
              />
        </div>
        <div className="form-group"> 
          <label>Height of Wall Above Bed Level</label>
          <input  type="text"
              required
              className="form-control"
              onChange={this.onChangeHeightAboveBed}
              />
        </div>
        <div className="form-group"> 
          <label>Embedment Depth</label>
          <input  type="text"
              required
              className="form-control"
              onChange={this.onChangeEmbedmentDepth}
              />
        </div>
        <div className="form-group"> 
          <label>Wall Type: [Choose from: counterfort, sheet piled and combi-wall] </label>
          <input  type="text"
              required
              className="form-control"
              onChange={this.onChangeWallType}
              />
        </div>
        <div className="form-group"> 
          <label>Station Id [Temporary: choose a value from these ones: 0040, 0045, 0453, 0462] </label>
          <input  type="text"
              required
              className="form-control"
              onChange={this.onChangeStationId}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}



export default AddQuay;