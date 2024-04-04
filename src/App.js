import "./App.css";
import { ethers } from "ethers";
import { abi, contractAddress } from "./constants.js";

function App() {
  async function connectButton() {
    //let signer = null;
    let provider;
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      console.log(provider);

      //signer = await provider.getSigner();
    }
    console.log("Wallet Connected..........................");
  }

  // async function disconnectButton() {
  //   console.log("Wallet Disconnected.......................");
  // }

  async function Deposit() {
    let signer = null;
    let provider;
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      console.log(provider);
      signer = await provider.getSigner();
    }

    try {
      const newDeposit = document.getElementById("depositAmount").value;
      const contract = new ethers.Contract(contractAddress, abi, signer);
      // const formatedDeposit = new ethers.parseUnits(`${newDeposit}`, "6");
      const transaction = await contract.Deposit(newDeposit);
      await transaction.wait();
      console.log("Amount Deposited!", transaction);
    } catch (error) {
      console.log(error);
    }
  }
  let addressesArray = [];
  let amountArray = [];

  function addAddress() {
    try {
      const newPayoutAdderss = document.getElementById("payoutAddress").value;

      addressesArray = newPayoutAdderss.split(/\s+/);

      console.log("Addresses Added :", addressesArray);
    } catch (error) {
      console.log(error);
    }
  }

  function addAmount() {
    try {
      const newPayoutAmount = document.getElementById("payoutAmount").value;
      // amountArray.push(newPayoutAmount);
      amountArray = newPayoutAmount.split(/\s+/);
      console.log("Amounts Added :", amountArray);
    } catch (error) {
      console.log(error);
    }
  }

  async function Payout() {
    addAddress();
    addAmount();
    let signer = null;
    let provider;
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      console.log(provider);
      signer = await provider.getSigner();
    }

    try {
      const contract = new ethers.Contract(contractAddress, abi, signer);
      // const formatedDeposit = new ethers.parseUnits(`${newDeposit}`, "6");
      const transaction = await contract.sendUSDC(addressesArray, amountArray);
      await transaction.wait();
      console.log("Payout Transaction!", transaction);
    } catch (error) {
      console.log(error);
    }
  }

  async function viewDetails() {
    let provider;
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      console.log(provider);
      await provider.send("eth_requestAccounts", []);

      try {
        const contract = new ethers.Contract(contractAddress, abi, provider);
        const transaction = await contract.Administrators(0);
        console.log(transaction);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <br />
        <div>Sample Implementation</div>
        <button onClick={connectButton}>Connect Wallet</button>
        <br />
        {/* <button onClick={disconnectButton}>Disconnect Wallet</button> */}
        <label for="depositAmount">Enter Deposit Amount</label>
        <input id="depositAmount"></input>

        <button onClick={Deposit}>Deposit</button>
        <br />
        <h1> Payout </h1>
        <label for="payoutAddress">Enter addresses</label>
        <input id="payoutAddress"></input>
        <label for="payoutAmount">Enter Amount</label>
        <input id="payoutAmount"></input>

        <button onClick={Payout}>Payout</button>
        <br />
        <button onClick={viewDetails}>View Details</button>
      </header>
    </div>
  );
}

export default App;
