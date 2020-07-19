import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import AddProducts from './component/AddProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Data from './component/Data';
class App extends React.Component{
   constructor(){
    super();
       localStorage.setItem('products',JSON.stringify(Data));
   }
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <ul className="navbar-nav" id="menuLeft">
            <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>&nbsp;&nbsp;
            <li className="nav-item">
              <Link className="nav-link" to="/add">Add Products</Link>
            </li>&nbsp;&nbsp;
          </ul>
        </nav>
        <Switch>
        <Route path='/add'>
            <AddProducts />
            </Route>
          <Route path='/'>
          <Home />
            </Route>
        </Switch>
        </Router>
    );
  }
}
export default App;
