
import React, { useState } from "react";
import { ethers } from "ethers";

const App = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // Initialize ethers.js provider using MetaMask
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const accountAddress = await signer.getAddress();

        // Get the balance of the account
        const balance = await provider.getBalance(accountAddress);
        const formattedBalance = ethers.utils.formatEther(balance);

        setAccount(accountAddress);
        setBalance(formattedBalance);
        setError(null);
      } catch (err) {
        setError("Error connecting to MetaMask: " + err.message);
        console.error(err);
      }
    } else {
      setError("MetaMask is not installed!");
    }
  };

  return (
    <div className="App">
      <h1>MetaMask Account Information</h1>
      <button onClick={connectMetaMask}>Connect MetaMask</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {account && (
        <div>
          <h2>Account Information:</h2>
          <p>
            <strong>Account Address:</strong> {account}
          </p>
          <p>
            <strong>Balance:</strong> {balance} ETH
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
