import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <span className="text-2">
        I tried and failed. I tried again and again.
      </span>
      <span>
        <Link to="https://github.com/">
          <FaGithub />
        </Link>
      </span>
    </footer>
  );
}

export default Footer;
