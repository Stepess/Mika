import React, { Component } from 'react';

class User extends Component {
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
            <button className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default User;