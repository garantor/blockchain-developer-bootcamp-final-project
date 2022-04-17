import React from 'react'
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";


function Header({ title, Accounts, Balances, btnhandler, connection }) {
  
  return (
    <header className="Header">
      <p>{title}</p>
      {!connection ? (
       <Button onClick={btnhandler} variant="primary">
              Connect to wallet
        </Button>
      ) : (
         <Card className="text-center">
        <Card.Header>
          <strong>Address: </strong>
          {Accounts.slice(0, 10)}...
        </Card.Header>
        <Card.Body>
            <Card.Text>
              <strong>Balance: </strong>
              {Balances} ETH
            </Card.Text>
        </Card.Body>
      </Card>
      )}
     
    </header>
  );
}

export default Header