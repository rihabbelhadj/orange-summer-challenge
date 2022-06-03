import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Navbar from "./components/navbar.components"

import LoginUser from './components/login.components';
import Home from './components/home.components';
import UserList from './components/user.component';
import ItemList from './components/items.components';
function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Routes>
      <Route path="/" exact element={<LoginUser />} />;
      <Route path="/home" exact element={<Home />} />
      <Route path="/user" exact element={<UserList />} />
      <Route path="/item" exact element={<ItemList />} />
      </Routes>
      </div>
      
    </Router>
  );
}

export default App;
