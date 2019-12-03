import React from "react";
import { NavLink } from 'react-router-dom'

const Navbar = ({ children }) => (
  <header className="">
    <nav>
      <ul className="ui secondary menu">
        <li className="item"><NavLink to="/" exact>Home</NavLink></li>
        <li className="item"><NavLink to="/test" exact>Test</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Navbar
