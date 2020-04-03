import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Contacto from "./pages/Contacto";
import Reservations from "./pages/Reservations";
import ContactForm from "./components/ContactForm";

import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Contacto} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/contacto/" component={Contacto} />
        <Route exact path="/reservations/:slug" component={Reservations} />
        <Route exact path="/contactForm/" component={ContactForm} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );

}

export default App;
