import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <nav className="Nav">
     
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link> 
          {/* This should contain all related transactions stuff, like add transaction, view all transaction, see transaction and threshold */}
        </li>
        <li>
          <Link to="/signers">Signers</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        {/* <li>
          <Link to="/post">Posts</Link>
        </li> */}
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
