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
              <img id="aLaDerecha" src={logo1} alt="Ox Comunicación y Ventas" width="160" height="80"  />
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
              <Link id="fuenteBebaParaLink" to="/contacto">VIRTUAL CLASSES</Link>
            </li>
            <li>
              <Link id="fuenteBebaParaLink" to="/contactForm">INSCRIBITE!</Link>
            </li>
            <li>
              <Link id="fuenteBebaParaLink" to="/profesor">DEL PROFE!</Link>
            </li>

          </ul>

        </div>
      </nav>

    );
  }
}
