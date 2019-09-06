import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Mika</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav> <br />
          <h2>Welcome to React CRUD Tutorial</h2> <br />
          <Switch>
            <Route exact path='/create' component={Create} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/index' component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: []
//     }
//   }

//   componentDidMount() {
//     axios.get('http://localhost:8080/users').then(response =>
//       this.setState({ users: response.data })
//     )
//       .catch(error => console.log("Some error occured: " + error))
//   }

//   render() {
//     return (
//       <UserList users={this.state.users} />
//     )
//   }
// }

function UserList(props) {
  const users = props.users.map(user =>
    <User key={user.id} user={user} />
  );
  return (
    <table>
      <tbody>
        <tr>
          <th>id</th>
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
      <td>{props.user.id}</td>
      <td>{props.user.username}</td>
      <td>{props.user.firstName}</td>
      <td>{props.user.email}</td>
    </tr>
  )
}

export default App;
