import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class User extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    axios.delete('http://localhost:8080/users/' + this.props.user.id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.user.id}
        </td>
        <td>
          {this.props.user.username}
        </td>
        <td>
          {this.props.user.email}
        </td>
        <td>
          {this.props.user.firstName}
        </td>
        <td>
          <Link to={"/edit/" + this.props.user.id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default User;