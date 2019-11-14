import React, { Component } from 'react';

import axios from 'axios';
import Quay from './Quay';


class QuayList extends Component {

  constructor(props) {
    super(props);

    this.state = { quayList: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/quays/')
      .then(response => {
        this.setState({ quayList: response.data })
      })
      .catch(err => console.log(err));
    }

  quayList = () => {
    return this.state.quayList.map(quay => {
      return <Quay quay={quay} key={quay._id} />
    })
  }

  render() {

    return(
      <div>
        <h3>Quays Monitored</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
                <th>Quay</th>
                <th>Info Report</th>
                <th>Location</th>
                <th></th>
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