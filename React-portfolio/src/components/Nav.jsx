import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import '../styles/Nav.css'

export default function Nav() {
  
    return (
      <header>
        <h1>Ibrahima Diallo</h1>
        <Navbar
        links={[
          <Link key={1} to="/">
            About
          </Link>,
          <Link key={2} to="/contact">
            Contact
          </Link>,
          <Link key={3} to="/portfolio">
            Portfolio
          </Link>,
          <Link key={4} to="/resume">
            Resume
          </Link>,
        ]}
      />
   </header>
    );
}