import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Items = props => (
    <tr>
      <td>{props.items.name}</td>
      <td>{props.items.desciption}</td>
      <td>{props.items.prix}</td>
      <td>{props.items.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/:"+props.items._id}>edit</Link> | <a href="#" onClick={() => { props.deleteItem(props.items._id) }}>delete</a>
      </td>
    </tr>
  )
export default class ItemList extends Component {
    constructor(props) {
        super(props);
    
        this.deleteItem = this.deleteItem.bind(this)
    
        this.state = {items: [] };
      }
    
      componentDidMount() {
        axios.get('http://localhost:5005/item/')
          .then(response => {
            this.setState({ items: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
         
      }
      deleteItem(id) {
        axios.delete('http://localhost:5005/item/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
            items: this.state.items.filter(el => el._id !== id)
        })
      }
      itemList() {
        return this.state.items.map(currentitems => {
          return <Items items={currentitems} deleteItem={this.deleteItem} key={currentitems._id}/>;
        })
      }
    render() {
        return (
            <div>
        <h3>List Items</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Prix</th>
              <th>Date</th>
              <th>Actions</th>
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