import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Item = props => (
    <tr>
      <td>{props.items.name}</td>
      <td>{props.items.description}</td>
      <td>{props.items.prix}</td>
      <td>{props.items.date.substring(0,10)}</td>
      
    </tr>
  )

export default class Home extends Component {
    constructor(props) {
        super(props);
    
       
    
        this.state = {items: [] ,users : [] };
      }
    
      componentDidMount() {
        axios.get('http://localhost:5005/item')
          .then(response => {
            this.setState({ items: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
          axios.get('http://localhost:5005/user/')
          .then(response => {
            this.setState({ users: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }

      itemList() {
        return this.state.items.map(item => {
          return <Item items={item} key={item._id}/>;
        })
      }
      countType(type) {
        const countTypes = this.state.items.filter(item => item);
        return countTypes.length;
    }
    countUser(type) {
        const countUser = this.state.users.filter(user => user);
        return countUser.length;
    }
     
    render() {
        return (
        <div>
        <h3>Home Page</h3>
        <div> 
          number of items: {this.countType('items')}  <br></br>
          number of Users: {this.countUser('users')} 
         </div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>name</th>
              <th>Description</th>
              <th>prix</th>
              <th>Date</th>
              
            </tr>
          </thead>
          <tbody>
            { this.itemList() }
          </tbody>
        </table>
      </div>
        )
    }
}