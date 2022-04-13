import './App.css';
import contract from ".//contracts/multiSigWithThreshold.json";
import { useEffect } from 'react';
import Web3 from 'web3';

const ABI = contract.abi;
// console.log(ABI)

function App() {
  const providerUrl = process.env.PROVIDER_URL || 'http://localhost:8545';
  useEffect(() => {
    const web3 = new Web3(providerUrl); 
    const provider = window.ethereum;

    if(typeof provider !== 'undefined'){
      provider.request({method: 'eth_requestAccounts'}).then(accounts => {
        console.log(accounts);
      }).catch (err => {
        console.log(err);
      });
    }
  }, []);
  return (
    <div className="App">
      <h1> Hello World</h1>
    </div>
  );
}

export default App;
