# Consensys Blockchain-Developer-Bootcamp-Final-Project
    Token Bridge - A simple Token Bridge to Bridge Tokens from BSC to Stellar Blockchain


## How It Will Work
## WorkFlow
    1. User Calls a specified Deposit Endpoints to get an Address

    2. User Send Token to The Specified Address from any Binance Smart Chain Supported wallet

    3. Event Listener picks up transactions and Check for the Issuer ID and User Memo

    4. If transaction Contains Both(Issuer Id and The User Memo) we Mint New token on Stellar and Send to Stellar Distributor Account specifying the Owner of the transaction through the memo

### This is Just a Simple Overview of the Workflow, the Readme will be updated Soon to contain more details and Define some of the Terms Use Above.

