import React, { Component } from 'react';

import axios from 'axios';
import Quay from './Quay';


class QuayList extends Component {

  constructor(props) {
    super(props);

    this.quayList = this.quayList.bind(this);

    this.state = { quayList: [
      {
        quayname: "quay test 1",
        info: "testing quay 1",
        location: "right here",
        _id: 1
      }
    ] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/quays/')
      .then(response => {
        this.setState({ quayList: response.data })
        console.log(this.state.quayList)
      })
      .catch(err => console.log(err));
    }

  quayList() {
    return this.state.quayList.map(quay => {
      return <Quay quay={quay} key={quay._id} />
    })
  }


  render() {

    return(
      <div>
        <h3>All Quays We Currently Monitor</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
                <th>Quay Name</th>
                <th>Info Report</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
          <tbody>
            { this.quayList() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default QuayList;