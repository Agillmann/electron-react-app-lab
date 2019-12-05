import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="">
    <nav>
      <ul className="">
        <li className="">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/test" exact>
            Test
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
