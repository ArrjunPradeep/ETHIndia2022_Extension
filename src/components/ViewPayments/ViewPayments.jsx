import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ViewPayments.css'

function ViewPayments() {

    let navigate = useNavigate();

  return (
    <div className='viewpayments-container'>
        <div className="viewpayments-one">
            <h3>:: Address ::</h3>
            <span>0x21948129401iwhf2y38r392481324</span>
            <h3>:: Amount ::</h3>
            <span>11</span>
            <h3>:: Interval ::</h3>
            <span>2 mins</span>
        </div>
        {/* <div className="viewpayments-two">

        </div> */}
        <div className="viewpayments-three">
            <button className="viewpayments-button" onClick={() => navigate("/dashboard")}>Back</button>
        </div>
    </div>
  )
}

export default ViewPayments