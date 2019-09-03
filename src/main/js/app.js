const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
    		client({method: 'GET', path: '/users'}).done(response => {
    			this.setState({users: response.entity});
    		});
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

ReactDOM.render(
	<App />,
	document.getElementById('react')
)