# Simple Task Tracker DAPP

## This is a simple task tracker dapp powered by Ethereum, the main purpose of this dapp is to create a simple contract that tracks Tasks added to it. The contract has the following major functions;
    1. Add Task
    2. Create Task
    3. Delete Task
    4. Get all Task
    5. Pause Smart contract
    6. Unpause Smart Contract

**This is a truffle Project**, to run project follow the steps below;

1. ### Clone repo to local machine and change dir to the new clone repo;

    - git clone https://github.com/garantor/blockchain-developer-bootcamp-final-project.git
    - cd blockchain-developer-bootcamp-final-project

2. ### install Dependencies;
    - npm install

3. compile and deploy the contract to blockchain;
    - truffle deploy --network rinkeby --reset --compile-none

4. Change Dir to the client and run serve to start interacting with the deployed contract;
    - cd client;
    - npm install
    - npm run serve

5. Open http://localhost:8080/ URL to interact with the contract. MetaMask extension should be installed on your browser and you need to select the network which matches where the contract is being deployed. Furthermore, you can import your generated accounts in Truffle to cover the fees.