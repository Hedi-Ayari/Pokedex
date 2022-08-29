import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { NavLink } from 'react-router-dom';

  const path = window.location.pathname;
   console.log('path = ',path) ;
 
class navbar extends Component {
  render() {
    return (


<header>
  <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
    <h1 className="logo">Pokédex</h1>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
  
      <ul>
        
      </ul>
      <form className="form-inline my-2 my-sm-0">
        <input className="form-control mx-auto search" type="search" placeholder="Search by Name" aria-label="Search" id="search" />
      </form>
    
 
  </nav>
</header>


      
    );
  }
}
 
export default navbar;