import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

import logo1 from "../images/oxCalidad.png";
export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
              <img id="aLaDerecha" src={logo1} alt="Ox Comunicación y Ventas" width="150" height="100"  />
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/contacto">VIRTUAL CLASSES</Link>
            </li>
          </ul>
            
        </div>
      </nav>
    
    );
  }
}
