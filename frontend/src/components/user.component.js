import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const User = props => (
    <tr>
      <td>{props.user.username}</td>
      <td>{props.user.email}</td>
      <td>{props.user.password}</td>
      <td>{props.user.date.substring(0,10)}</td>
      <td>
      <a href="#" onClick={() => { props.updateUser(props.user._id) }}>edit</a> | <a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a>
      </td>
    </tr>
  )
export default class UserList extends Component {
    constructor(props) {
        super(props);
    
        this.deleteUser = this.deleteUser.bind(this)
    
        this.state = {user: []};
      }
    
      componentDidMount() {
        axios.get('http://localhost:5005/user/')
          .then(response => {
            this.setState({ user: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
      deleteUser(id) {
        axios.delete('http://localhost:5005/user/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          User: this.state.user.filter(el => el._id !== id)
        })
      }
      userList() {
        return this.state.user.map(currentuser => {
          return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
        })
      }
    render() {
        return (
            <div>
        <h3>All Users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Date</th>
            
            </tr>
          </thead>
          <tbody>
            { this.userList() }
          </tbody>
        </table>
      </div>
        )
    }
}