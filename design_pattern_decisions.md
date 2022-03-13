# Design Pattern Decisions

## Inheritances and Interfaces


- **@openzeppelin/contracts/access/Ownable.sol
The Todo.sol contract inherit from ownable which help restrict interact with the smart contract.

- **@openzeppelin/contracts/security/ReentrancyGuard.sol
The Accounting.sol contract inherit from openzeppelin ReentrancyGuard contract which helps prevent reentrancy during certain functions call and Executions
Prize.sol also inherit from this contract too, to help prevent reentrancy

- **@openzeppelin/contracts/security/Pausable.sol
openzeppelin Pausable contract was inherited from to help with pausing and unpausing contracts

## Pausable Design Pattern - Circuit Breaker
`pause` function is implemented to stop all deposits to the contract so that new users wouldn't loss their coins if there are any bugs in the contract.

## ACL Design Pattern
`onlyOwner` modifier is used for functions that should only be called by contract owner.


## Access Control Design

The contract uses the Ownable design pattern to restrict access to the contract. When adding task, removing, tasks, updating or deleting task