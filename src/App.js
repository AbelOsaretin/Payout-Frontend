import logo from "./logo.svg";
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

  async function disconnectButton() {
    console.log("Wallet Disconnected.......................");
  }

  async function updateDetails() {
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
      const newName = document.getElementById("newName").value;
      const newAge = document.getElementById("newAge").value;
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const transaction = await contract.updateName(newName);
      const transactionTwo = await contract.updateAge(newAge);
      await transaction.wait();
      await transactionTwo.wait();
      console.log("New Details Uploaded!");
    } catch (error) {
      console.log(error);
    }
  }

  async function viewDetails() {
    let signer = null;
    let provider;
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      console.log(provider);
      signer = await provider.getSigner();
      await provider.send("eth_requestAccounts", []);
    }

    try {
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const transaction = await contract.getEntityDetails();
      console.log(transaction);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={connectButton}>Connect Wallet</button>
        <button onClick={disconnectButton}>Disconnect Wallet</button>
        <label for="newName">Enter Name</label>
        <input id="newName"></input>
        <label for="newAge">Enter Age</label>
        <input id="newAge"></input>
        <button onClick={updateDetails}>Update</button>
        <button onClick={viewDetails}>View Details</button>
      </header>
    </div>
  );
}

export default App;
