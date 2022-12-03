import React from "react";
import { useNavigate } from "react-router-dom";
import "./ViewPayments.css";

function ViewPayments() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="viewpayments-container">
        <div className="viewpayments-one">
          <h3>Address</h3>
        </div>
        <div className="viewpayments-two">
          <h3>Amount</h3>
        </div>
        <div className="viewpayments-three">
          <h3>Interval</h3>
        </div>
      </div>
      <button className="viewpayments-button" onClick={() => navigate("/dashboard")}>Back</button>
    </div>
  );
}

export default ViewPayments;
