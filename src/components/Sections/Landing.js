import React from "react";
import { StyledLanding } from "../styled/HomeStyles";
import landing from "../../assets/icons/Landing.svg";

const Landing = () => {
  return (
    <StyledLanding>
      <div className="landing-info">
        <h1>
          Rent a <span>Place</span> away from <span>Home</span> in the{" "}
          <span>Metaverse</span>
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="input">
          <input placeholder="Search for location" />
          <button>Search</button>
        </div>
      </div>
      <div className="hero-div">
        <img src={landing} alt="hero" />
      </div>
    </StyledLanding>
  );
};

export default Landing;
