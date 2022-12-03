import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {

    let navigate = useNavigate();

  return (
    <div className='dashboard-container'>
        <div className="one">
            <h3>Contract Address : </h3>
            <span>0xu3yri1732yr4y32r4i8734rhi23u4eo283</span>
        </div>
        <div className="two">
            <h3>Balance : </h3>
            <span>10</span>
        </div>
        <div className="three">
            <button className="dashboard-button" onClick={() => navigate("/send")}>Send</button>
            <button className="dashboard-button" onClick={() => navigate("/viewPayments")}>Recurring Payments</button>
        </div>
    </div>
  )
}

export default Dashboard