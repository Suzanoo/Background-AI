import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="company-logo">D</div>
      <nav className="navbar">
        <ul className="nav-items">
          <li className="nav-item">
            <Link className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Modify</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
