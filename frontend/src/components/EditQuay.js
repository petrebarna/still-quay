import React, { Component} from 'react';
import axios from 'axios';

class EditQuay extends Component {
  constructor(props) {
    super(props);

    this.onChangeQuayname = this.onChangeQuayname.bind(this);
    this.onChangeInfo = this.onChangeInfo.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      quayname: '',
      info: '',
      location: ''
    }
  }

  onChangeQuayname = e => {
    this.setState({
      username: e.target.value
    })
  }

  onChangeInfo = e => {
    this.setState({
      info: e.target.value
    })
  }

  onChangeLocation = e => {
    this.setState({
      location: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();

    const quay = {
      quayname: this.state.quayname,
      info: this.state.info,
      location: this.state.location
    }

    console.log(quay);

    axios.post('http://localhost:5000/quays/update/' + this.props.match.params.id, quay)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    window.location = '/quays'
  }


  render() {
    return (
      <div>
        <h3>Edit Quay</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Quay Name: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.quayname}
              onChange={this.onChangeQuayname}>
                {
                  this.state.quays.map(quay => {
                    return <option
                      key={quay}
                      value={quay}>{quay}
                      </option>
                  })
                }
              </select>
          </div>
        </form>
      </div>
    )
  }
}
export default EditQuay;