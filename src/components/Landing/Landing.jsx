import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

function Landing() {

  let navigate = useNavigate();

  return (
    <div className="button">
        <button className="landing-button" onClick={() => navigate("/dashboard")}>Deploy Account</button>
    </div>
  );
}

export default Landing;
