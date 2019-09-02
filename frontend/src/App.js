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
      axios.get('http://localhost:8080/users').then(function (response) {
        console.log(response);
        this.setState({users: response.entity});
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    		// client({method: 'GET', path: '/users'}).done(response => {
    		// 	this.setState({users: response.entity});
    		// });
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
						<th>First Name</th>
						<th>Last Name</th>
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
				<td>{this.props.user.firstName}</td>
				<td>{this.props.user.lastName}</td>
				<td>{this.props.user.email}</td>
			</tr>
		)
	}
}

/*ReactDOM.render(
	<App />,
	document.getElementById('react')
)*/

export default App;
