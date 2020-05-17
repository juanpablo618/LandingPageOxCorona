import React from "react";
import loadingGif from "../images/Footer.png";


const Loading = () => {
  return (

    <div className="loading ">
      <img src={loadingGif} />
    </div>
  );
};

export default Loading;
