import React, { useState } from "react";
import Head from "./Head";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    const [navbar, setnavbar] = useState(false)
  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
            <nav>
              <ul className={ navbar ? "navbar" : 'flex'} onClick={() => setnavbar(false)}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Store">Store</Link>
                </li>
                <li>
                  <Link to="/Gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/Sports">Sports</Link>
                </li>
                <li>
                  <Link to="/Cars">Cars</Link>
                </li>
                <li>
                  <Link to="/Food">Food</Link>
                </li>
                <li>
                  <Link to="/PlayStation">World News</Link>
                </li>
                <li>
                  <Link to="/XBox">Boots</Link>
                </li>
                <li>
                  <Link to="/PC GAMING">Jackets</Link>
                </li>
              </ul>
              <button className="barIco" onClick={() => setnavbar(!navbar)}>
                {navbar ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
              </button>
            </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
