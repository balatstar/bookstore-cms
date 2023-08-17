import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

function Navbar() {
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <nav className="navbar">
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
