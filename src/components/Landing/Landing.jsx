import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wallet, Contract, ethers } from 'ethers';
import "./Landing.css";

function Landing() {

  const [isNewWallet, setNewWallet] = useState(true)
  const [adminAddress, setAdminAddress] = useState('')
  let navigate = useNavigate();

  const deployWallet = async () => {
    let ABI //TODO
    let bytecode
    let wallet 
    let entryContractAddr = "0x602aB3881Ff3Fa8dA60a8F44Cf633e91bA1FdB69"
    const Factory = new ethers.ContractFactory(ABI, bytecode, wallet);
    let factory = await Factory.deploy(adminAddress,  entryContractAddr)
    await factory.deployed()

    localStorage.setItem("walletAddr", factory.address())
  }


  useEffect(() => {
    let newWallet = false//TODO ARJUN check if wallet exists in local storage
    setNewWallet(newWallet)

    if (newWallet) {
      const wallet = Wallet.createRandom()
      console.log(wallet)
      localStorage.setItem('wallet', JSON.stringify(wallet)) //TODO encypt wallet and store
    }
  }, []) 

  const handleSubmit = async(e) => {
    
    if(isNewWallet) {
      await deployWallet()
    }
    navigate('/dashboard')
  }

  return (
    <div className="button">
      <button className="landing-button" onClick={() => handleSubmit()}>{
        isNewWallet ? "Create Wallet" : "Connect Wallet"
      }</button>
    </div>
  );
}

export default Landing;
