import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
export default class LoginUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeUseremail = this.onChangeUseremail.bind(this);
    this.onChangeUserpassword = this.onChangeUserpassword.bind(this);
    this.onChangeUserDate = this.onChangeUserDate.bind(this);
    this.onChangeUserpassword = this.onChangeUserpassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    

    this.state = {
      username: '',
      email: '',
      password: '',
      date: new Date(),
      roles: [],
      }
    }

    componentDidMount() {
        
        axios.get('http://localhost:5005/user/')
        .then(response => {
          if (response.data.length > 0) {
            this.setState({
              users: response.data.map(user => user.roles),
              roles: response.data[0].roles
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
  
          
      }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangeUseremail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangeUserpassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  onChangeUserDate(e) {
    this.setState({
      date: e.target.value
    })
  }
  onChangeUserRole(e) {
    this.setState({
      roles: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email : this.state.email,
      password: this.state.password,
      date : this.state.date,
      roles: this.state.roles,

    }

    console.log(user);

    axios.post('http://localhost:5005/user/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          
          <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeUseremail}
                />
           <label>password: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangeUserpassword}
                />
            <label>date of birth: </label>
            <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
            <label>Role: </label>
            <select useref="userInput"
                    required
                    className="form-control"
                    value={this.state.roles}
                    onChange={this.onChangeUserRole}>
                    {
                      this.state.roles.map(function(user) {
                        return <option 
                          key={user}
                          value={user}>{user}
                          </option>;
                      })
                    }
                </select>
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />


            
            
          </div>
        </form>
      </div>
    )
  }
}