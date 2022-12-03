import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wallet, Contract, ethers } from 'ethers';
import { SimpleAccountAPI } from "@account-abstraction/sdk"
import "./Landing.css";

function Landing() {

  const [isNewWallet, setNewWallet] = useState(true)
  const [adminAddress, setAdminAddress] = useState('')
  const [wallet, setWallet] = useState({})
  let navigate = useNavigate();

  const deployWallet = async () => {
    let provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/TvzZQ91FMkx3NsFlqHg1YRFA619MYNOi")
    let entryContractAddr = "0x602aB3881Ff3Fa8dA60a8F44Cf633e91bA1FdB69"
    let factoryAddr = "0xB76d0161064066a66A7897D0939F6d7a1B7cE559"
    let walletAPI = new SimpleAccountAPI({
      provider: provider,
      entryPointAddress: entryContractAddr,
      owner: wallet,
      factoryAddress: factoryAddr,
    });

    let accountAddr = await walletAPI.getAccountAddress()
    console.log("accountAddr", accountAddr)



    // const Factory = new ethers.ContractFactory(ABI, bytecode, wallet);
    // let factory = await Factory.deploy(adminAddress,  entryContractAddr)
    // await factory.deployed()

    localStorage.setItem("walletAddr", accountAddr)
  }


  useEffect(() => {
    let newWallet = true//TODO ARJUN check if wallet exists in local storage
    setNewWallet(newWallet)
    console.log("new wallet", newWallet)
    if (newWallet) {
      const wallet = Wallet.createRandom()
      console.log(wallet)
      setWallet(wallet)
      localStorage.setItem('wallet', JSON.stringify(wallet)) //TODO encypt wallet and store
    } else {
      let wallet = JSON.parse(localStorage.getItem('wallet'))
      setWallet(wallet)
      localStorage.setItem("walletAddr", wallet.address)

    }
  }, [])

  const handleSubmit = async (e) => {

    if (isNewWallet) {
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
