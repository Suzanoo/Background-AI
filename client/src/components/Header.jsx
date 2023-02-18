import { Link, Navigate } from 'react-router-dom';

function Header() {
  return (
    <header className="header sticky">
      <div className="company-logo">
        <Link>D</Link>
      </div>
      <nav className="navbar">
        <ul className="nav-items">
          <li className="nav-item">
            <Link className="nav-link">Generate</Link>
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
