// Import statements
const ContractArtifacts = artifacts.require("MuiltSigWithThreshold");

// Contract declaration
contract("ContractArtifacts", function (accounts) {
  let contractInstance;
  //default truffle account
  const defaultAccount = accounts[0];
  // This will be run each time a test is run
  beforeEach(async function () {
    contractInstance = await ContractArtifacts.new();
  });

  // Test 1, check that the contract owner is same with the contract deployer

  it("should define owner", async function () {
    const owner = await contractInstance.owner();

    return assert.equal(
      owner,
      defaultAccount,
      "default account should be owner"
    );
  });

  //Test 2, check that the threshold for transfer is correct
  it("Transfer transaction threshold", async function () {
    const threshold = await contractInstance.transactionTypeList("transfer");
    return assert.equal(threshold, 60, "Transfer Threshold should be 60");
  });
  //Test 3, add a new signer to the contract and check that the signer is added
  it("Assign a new signer and add weight", async function () {
    const signer = accounts[1];
    const weight = 10;
    await contractInstance.addSignerWithWeight(signer, weight);
    const signerList = await contractInstance.getSignerByAddress(accounts[1]);
    return assert.equal(
      signerList[0],
      signer,
      "Account should be added to signer list"
    );
  });
  //Test 4, check that the signer is added with the correct weight

  it("Assign new signer and check it weight", async function () {
    const signer = accounts[1];
    const weight = 10;
    await contractInstance.addSignerWithWeight(signer, weight);
    const signerList = await contractInstance.getSignerByAddress(accounts[1]);
    return assert.equal(signerList[1], weight, "Account Weight should be 10");
  });
  //Test 5, add a new transaction and check that the transaction recipient is same.
  it("Add a new transaction and check the account", async function () {
    const signer = accounts[0];
    const weight = 10;
    await contractInstance.addSignerWithWeight(signer, weight);

    const recipient = accounts[2];
    const value = 100;
    const transactionType = "withdrawal";

    await contractInstance.addTransaction(recipient, value, transactionType);
    const txObj = await contractInstance.getTxByID(0);
    return assert.equal(txObj[0], recipient, "Recipient should be accounts[2]");
  });

  it("Add a new transaction and check the value", async function () {
    const signer = accounts[0];
    const weight = 10;
    await contractInstance.addSignerWithWeight(signer, weight);

    const recipient = accounts[2];
    const value = 100;
    const transactionType = "withdrawal";

    await contractInstance.addTransaction(recipient, value, transactionType);
    const txObj = await contractInstance.getTxByID(0);
    return assert.equal(txObj[1], value, "Value should be 100");
  });

  it("Add a new transaction and transaction type", async function () {
    const signer = accounts[0];
    const weight = 10;
    await contractInstance.addSignerWithWeight(signer, weight);

    const recipient = accounts[2];
    const value = 100;
    const transactionType = "withdrawal";

    await contractInstance.addTransaction(recipient, value, transactionType);
    const txObj = await contractInstance.getTxByID(0);
    return assert.equal(txObj[2], transactionType, "Value should be 100");
  });

  it("Transfer Ownership", async function () {
    const signer = accounts[0];
    const weight = 10;
    await contractInstance.addSignerWithWeight(signer, weight);

    const newOwner = accounts[1];
    await contractInstance.transferOwnership(newOwner);
    const owner = await contractInstance.owner();
    return assert.equal(owner, newOwner, "Owner should be accounts[1]");
  });
});
