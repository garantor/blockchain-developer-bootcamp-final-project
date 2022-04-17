import { Link } from "react-router-dom";

function TransNavbar({title1, title2, title3, title4, title5, title6}) {
  return (
    <nav className="TransNavbar">
      <ul>
        <li >
          <Link to={`/transactions/${title1}`}>{title1}</Link>
        </li>
        <li>
          <Link to={`/transactions/${title2}`}>{title2}</Link>
          {/* This should contain all related transactions stuff, like add transaction, view all transaction, see transaction and threshold */}
        </li>
        <li>
          <Link to={`/transactions/${title3}`}>{title3}</Link>
          {/* This should contain all related transactions stuff, like add transaction, view all transaction, see transaction and threshold */}
        </li>
        <li>
          <Link to={`/transactions/${title4}`}>{title4}</Link>
          {/* This should contain all related transactions stuff, like add transaction, view all transaction, see transaction and threshold */}
        </li>
        <li>
          <Link to={`/transactions/${title5}`}>{title5}</Link>
          {/* This should contain all related transactions stuff, like add transaction, view all transaction, see transaction and threshold */}
        </li>
        <li>
          <Link to={`/transactions/${title6}`}>{title6}</Link>
          {/* This should contain all related transactions stuff, like add transaction, view all transaction, see transaction and threshold */}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TransNavbar;
