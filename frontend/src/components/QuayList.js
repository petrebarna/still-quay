import React, { Component } from 'react';

import axios from 'axios';
import Quay from './Quay';


class QuayList extends Component {

  constructor(props) {
    super(props);

    this.quayList = this.quayList.bind(this);

    this.state = { quayList: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/quays/')
      .then(response => {
        this.setState({ quayList: response.data })
      })
      .catch(err => console.log(err));
    }

  quayList() {
    this.state.quayList.map(quay => {
      return <Quay quay={quay} key={quay._id} />
    })
  }


  render() {

    return(
      <div>
        <h3>All Quays We Currently Monitor</h3>
        <table className="table">
          <tbody>
            <tr className="thread-light">
                <th>Quay Name</th>
                <th>Info Report</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
          </tbody>
          <tbody>
            { this.quayList() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default QuayList;