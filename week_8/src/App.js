import React from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import Home from './Components/Home';
import BookTable from './Components/BookTable';
import About from './Components/About';
import ContactRestaurant from './Components/Contact';
import Services from './Components/Services';
import Login from './Components/Login';


export default class App extends React.Component {
  render() {
      return (
      <BrowserRouter>
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-warning">
              <Link className="navbar-brand nav-link active" to="/home">Resto App</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-item nav-link" to="/bookatable">Book Table</Link>
                  <Link className="nav-item nav-link" to="/contact">Contact Restaurant</Link>
                  <Link className="nav-item nav-link" to="/about">About</Link>
                  <Link className="nav-item nav-link" to="/services">Premium Services</Link>
                  <Link className="nav-item nav-link" to="/login">Login</Link>
                </div>
              </div>
            </nav>
              <Route path = "/home" component = {Home} />
              <Route path = "/bookatable" component = {BookTable} />
              <Route path = "/contact"  component = {ContactRestaurant} />
              <Route path = "/about"  component = {About} />
              <Route path = "/services"  component = {Services} />
              <Route path = "/login"  component = {Login} />
            </React.Fragment>
    </BrowserRouter>
          
      )
  }
}