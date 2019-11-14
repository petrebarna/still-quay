import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

class QuayEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id:'',
      quayname: '',
      info: '',
      location: '',
      stationId: '',
      wallType: '',
      heightAboveBed: null,
      embedmentDepth: null,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/quays/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          id: response.data._id,
          quayname: response.data.quayname,
          info: response.data.info,
          location: response.data.location,
          stationId: response.data.stationId,
          wallType: response.data.wallType,
          embedmentDepth: response.data.embedmentDepth,
          heightAboveBed: response.data.heightAboveBed
        })
      })
      .catch(err => console.log(err));  
  }

  render(){
    return(
      <div>
        <h3>{this.state.quayname}</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>{this.state.info}</td>
            </tr>
            <tr>
              <td>{this.state.location}</td>
            </tr>
            <tr>
              <td>
                <Link to={'/status/' + this.state.id}>View Status and Tides</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to={'/quays/edit/' + this.state.id}>Edit Info</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default QuayEntry;