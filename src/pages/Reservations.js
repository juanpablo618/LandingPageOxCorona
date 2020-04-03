import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ReservationForm from "../components/ReservationForm";

export default class Reservations extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug
    };
  };
  
  render() {
      return (
          <div>
            <Hero hero="roomsHero">
              <Banner title={`Solicitar reserva para:  ${this.state.slug}`}>
                <Link to="/" className="btn-primary">
                  Volver al inicio
                </Link>
              </Banner>
            </Hero>
            <ReservationForm  keyRoom={this.state.slug} />
          </div>
      );
  }
};