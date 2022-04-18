import { useState } from "react";
import Web3 from "web3";
import ContractArtifacts from "contracts/MuiltSigWithThreshold.json";
import {
  getOwner,
  signerCounter,
  addedSigner,
  connectWindow,
  addTransaction,
  signTransaction,
  getSignerByAddress,
  getAllTx,
  getOneTx,
} from "./web3client"; 
import {Routes, Route} from 'react-router-dom'
import MiniDrawer from "./Components/sidebar";
import Layout from './Components/Layout'
import Home from './Components/Home'
import MissingPage from './Components/MissingPage'
function App() {
  const [defaultAddress, setDefaultAddress] = useState("");
  const [bal, setBal] = useState(0);
  const [contractInstance, setContractInstance] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  async function connector(){
    const [contractObj, defaultAddress, bal] = await connectWindow();
    setContractInstance(contractObj);
    setDefaultAddress(defaultAddress);
    setBal(bal);
    setIsConnected(true);
  }

  function handleListBtn (e) {
    // console.log(e.target.value)
    // console.log(e);
  }



  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            account={defaultAddress}
            balance={bal}
            btnhandler={connector}
            connection={isConnected}
            handleListBtn={handleListBtn}
          />
        }
      >
        {/* <Route path="/" element={<MiniDrawer />} /> */}
        <Route path="/signers" element={<Home />} />
        <Route path="*" element={<MissingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
