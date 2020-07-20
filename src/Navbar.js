import React from "react";
import {Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    return (
      <>
        <nav>
          <h1>Lambda Eats</h1>
          <div className="links">
            <Link to='/'>
                <div className="button">Home</div>
            </Link>
            <Link to='/'>
                <div className="button">Help</div>
            </Link>
          </div>
        </nav>
      </>
    );
  };
  export default Navbar;