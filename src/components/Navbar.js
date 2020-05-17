import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import imgFooter from "../images/Footer.png";
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
        <div className="navbar nav-center">
        <table className="navbar nav-center">
          <td>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>

            <li id="Fright">
              <Link id="fuenteBebaParaLink" to="/contacto">CLASES VIRTUALES</Link>
            </li>
          </ul>
          </td>
          <td>
            <Link to="/contacto">
                <img id="aLaDerecha" src={logo1} alt="Ox Comunicación y Ventas" width="65" height="40" />
            </Link>
          </td>
          <td >
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li id="Fleft">
            <Link id="fuenteBebaParaLink" to="/contactForm">INSCRIBITE</Link>
            </li>

          </ul>
          </td>
          </table>
        </div>

    );
  }
}
