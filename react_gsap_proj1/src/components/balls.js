import React from "react";
import gsap from "gsap";

function Balls() {
  
    gsap.to(".ball", {
     rotation: 360,
     x: 750,
     scale:2,
    duration: 1,
  });

  return (
    <div className="parent">
      <div className="child">
        <h1>Rotating Balls</h1>
      </div>
      <div className="child">
        <div className="ball one">😃</div>
        <div className="ball two">😥</div>
        <div className="ball three">😤</div>
      </div>
    </div>
  );
}

export default Balls;
