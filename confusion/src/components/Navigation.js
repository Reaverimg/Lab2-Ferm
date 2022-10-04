import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import { ThemeContext } from "./ThemeContext";
import { Navbar, NavItem, Icon } from "react-materialize";
export default function Navigation() {
  // const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    // <div className='nbar'>
    //   <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
    //     <ul>
    //       <li className='first'> <Link to='/' className='active'>Home</Link></li>
    //       <li><Link>News</Link></li>
    //       <li><Link>About</Link></li>
    //       <li><Link to='/Contact'>Contact</Link></li>
    //     </ul>
    //     {/* <div className='ri' style={{ position: 'relative' }}>
    //       <a className='switch-mode' href='#' onClick={toggle}
    //         style={{
    //           backgroundColor: theme.backgroundColor,
    //           color: theme.color,
    //           outline: 'none'
    //         }} data-testid="toggle-theme-btn"
    //       >
    //         Switch Nav to {!dark ? 'Dark' : 'Light'} mode
    //       </a>
    //     </div> */}
    //   </nav>
    // </div>

    <Navbar
      className="menu"
      alignLinks="center"
      brand={<span className="brand-logo">Player Cards</span>}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
    >
      <ul>
        <li>
          <Link to="/">
            <Icon left>home</Icon>Home
          </Link>
        </li>
        <li to="/about">
          <Link to="/about">
            <Icon left>info_outline</Icon>About
          </Link>
        </li>
        <li href="/contact">
          <Link to="/contact">
            <Icon left>contacts</Icon>Contact
          </Link>
        </li>
      </ul>
    </Navbar>
  );
}
