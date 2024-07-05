import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <a href="/" className="logo">
        Logo
      </a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""} style={{ cursor: "pointer" }}>
        <li>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="pricing"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Pricing
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="signup"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            SignUp
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
