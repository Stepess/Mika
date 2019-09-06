import React, { Component } from 'react';
import axios from 'axios';
import User from './user.component';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {
          users: []
        };
    }

    componentDidMount(){
      axios.get('http://localhost:8080/users')
        .then(response => {
          this.setState({ users: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    renderUsers(){
      return this.state.users.map(user =>
        <User key={user.id} user={user} />
      );
    }

    render() {
      return (
        <div>
          <h3 align="center">User List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
              <th>id</th>
          <th>Username</th>
          <th>First Name</th>
          <th>Email</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.renderUsers() }
            </tbody>
          </table>
        </div>
      );
    }
  }