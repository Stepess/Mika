import React from 'react';
import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

// const React = require('react');
// const ReactDOM = require('react-dom');
//const client = require('./client');
const axios = require('axios');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
      axios.get('http://localhost:8080/users').then(response => 
        this.setState({users: response.data})
      )
      .catch(error => console.log("Some error occured: " + error))
    }

    render() {
    		return (
    			<UserList users={this.state.users}/>
    		)
    }
}

class UserList extends React.Component{
	render() {
		const users = this.props.users.map(user =>
			<User key={user.id} user={user}/>
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
}

class User extends React.Component{
	render() {
		return (
			<tr>
        <td>{this.props.user.username}</td>
				<td>{this.props.user.firstName}</td>
				<td>{this.props.user.email}</td>
			</tr>
		)
	}
}

export default App;
