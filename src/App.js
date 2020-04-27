import React from "react";
import "./App.css";
import Rooms from "./pages/Rooms";
import Contacto from "./pages/Contacto";
import Profesor from "./pages/Profesor";
import ProfesorAdmin from "./pages/ProfesorAdmin";
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
        <Route exact path="/profesor/" component={Profesor} />
        <Route exact path="/profesorAdmin/" component={ProfesorAdmin} />
        <Route exact path="/reservations/:slug" component={Reservations} />
        <Route exact path="/contactForm/" component={ContactForm} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );

}

export default App;
