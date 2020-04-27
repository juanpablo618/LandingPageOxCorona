import React from "react";
import Hero from "../components/Hero";
import ClaseProfe from "../components/ClaseDelProfesor";

//https://www.youtube.com/embed/v7XUMfI1juM


const Profesor = () => {
  return (
    <>

      <Hero hero="profesorFondo">
        <ClaseProfe></ClaseProfe>
      </Hero>
    </>
  );
};

export default Profesor;
