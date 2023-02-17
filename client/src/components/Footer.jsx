import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-items">
        <ul>
          <li>
            <Link to="https://www.facebook.com/">Facebook</Link>
          </li>
          <li>
            <Link to="https://github.com/">GitHub</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
