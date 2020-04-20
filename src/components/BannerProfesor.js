import React from "react";
const BannerProfesor = ({ children, title, subtitle }) => {
  return (
    <div className="BannerProfesor">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default BannerProfesor;
