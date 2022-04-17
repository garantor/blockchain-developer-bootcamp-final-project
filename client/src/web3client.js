import Web3 from "web3";
import ContractArtifacts from "contracts/MuiltSigWithThreshold.json";
import useState from "react";


let web3Provider = new Web3(Web3.givenProvider || "http://localhost:8545");
let network = new Web3(window.ethereum);
let defaultAddress ;

// contract should always require a deposit first before any  other transaction
// can be made, we can use a modifier
async function connectWindow(){
  const windowProvide = window.ethereum;
  if (typeof windowProvide !== "undefined") {
    try{
      // request for accounts
      const account = await windowProvide.request({
        method: "eth_requestAccounts",
      });
      defaultAddress = account[0];

      // Request for Account Balance
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [defaultAddress, "latest"],
      });
      const WeiBal = Web3.utils.hexToNumberString(balance);
      const EtherBal = Web3.utils.fromWei(WeiBal, "ether");
      const fixedbal = Number(EtherBal).toFixed(2);

      let currentNetwork = await network.eth.net.getId();
      let contractAddress = await ContractArtifacts.networks[currentNetwork]
        .address;

      const contractInstance = new web3Provider.eth.Contract(
        ContractArtifacts.abi,
        contractAddress
      );

      return [contractInstance, defaultAddress, fixedbal];
    } catch(err){
      console.log(err);
    }
  } else {
    alert("Please install MetaMask");
  }
}

async function getOwner(contractInstance) {
  const owner = await contractInstance.methods.owner().call();
  return owner;
}

async function signerCounter(contractInstance) {
  const signer = await contractInstance.methods.signerCounter().call();
  return signer;
}

async function addedSigner(contractInstance, _address, _weight) {
  const signerAdd = await contractInstance.methods
    .addSignerWithWeight(_address, _weight)
    .send({ from: defaultAddress });
  return signerAdd;
}

async function getSignerByAddress(contractInstance, _address) {
  const signer = await contractInstance.methods
    .getSignerByAddress(_address)
    .call();
  return signer;
}

async function addTransaction(contractInstance, address, amt, transactionType) {
  const signedTx = await contractInstance.methods
    .addTransaction(address, amt, transactionType)
    .send({ from: defaultAddress });
  return signedTx;
}


async function signTransaction(contractInstance, txIndex) {
  const signedTx = await contractInstance.methods
    .signTransaction(txIndex)
    .send({ from: defaultAddress });
  return signedTx;
}


async function addNewTxType(contractInstance,txName, requiredThreshold) {
  const signedTx = await contractInstance.methods
    .addTxWithThreshold(txName, requiredThreshold)
    .send({ from: defaultAddress });
  return signedTx;
}

async function revockSignerSignature(contractInstance,txIndex) {
  const signedTx = await contractInstance.methods
    .revockSignerSig(txIndex)
    .send({ from: defaultAddress });
  return signedTx;
}
async function submitTransaction(contractInstance,txIndex) {
  const signedTx = await contractInstance.methods
    .submitTransaction(txIndex)
    .send({ from: defaultAddress });
  return signedTx;
}

async function transferOwnership(contractInstance,newOwner) {
  const signedTx = await contractInstance.methods
    .transferOwnership(newOwner)
    .send({ from: defaultAddress });
  return signedTx;
}

async function getAllTx(contractInstance) {
  const signedTx = await contractInstance.methods.getAllTranactions().call();
  return signedTx;
}

async function getOneTx(contractInstance,txIndex) {
  const signedTx = await contractInstance.methods.getTxByID(txIndex).call();
  return signedTx;
}



export {
  getOneTx,
  getAllTx,
  getOwner,
  signerCounter,
  addedSigner,
  getSignerByAddress,
  signTransaction,
  addTransaction,
  addNewTxType,
  revockSignerSignature,
  submitTransaction,
  transferOwnership,
  connectWindow,
};
