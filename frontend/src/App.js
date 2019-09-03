import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/users').then(response =>
      this.setState({ users: response.data })
    )
      .catch(error => console.log("Some error occured: " + error))
  }

  render() {
    return (
      <UserList users={this.state.users} />
    )
  }
}

function UserList(props) {
  const users = props.users.map(user =>
    <User key={user.id} user={user} />
  );
  return (
    <table>
      <tbody>
        <tr>
          <th>Username</th>
          <th>First Name</th>
          <th>Email</th>
        </tr>
        {users}
      </tbody>
    </table>
  )
}

function User(props) {
  return (
    <tr>
      <td>{props.user.username}</td>
      <td>{props.user.firstName}</td>
      <td>{props.user.email}</td>
    </tr>
  )
}

export default App;
