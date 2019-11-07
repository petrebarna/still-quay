import React, { Component} from 'react';
import axios from 'axios';

class EditQuay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quayname: '',
      info: '',
      location: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/quays/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          quayname: response.data.quayname,
          info: response.data.info,
          location: response.data.location
        })
      })
      .catch(err => console.log(err));
  }

  onChangeInfo = e => {
    this.setState({
      info: e.target.value
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
      .then(response => console.log(response.data))
      .catch(err => console.log(err));

    alert("Changes Sent");
  }


  render() {
    return (
      <div>
      <h3>Editing</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Quay Info </label>
          <input  
            type="text"
            required
            className="form-control"
            onChange={this.onChangeInfo} />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
export default EditQuay;