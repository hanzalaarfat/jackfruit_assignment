import axios from "axios";
import React, { useState, useEffect } from "react";

function Header({ history }) {
  const [token, setToken] = useState("");
  const tok = localStorage.getItem("token");
  useEffect(() => {}, setToken[tok]);
  // setToken(tok);

  const logout = async (e) => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container-fluid">
            <a className="navbar-brand header_buttoin " href="/">
              Jack Fruit
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/home">
                    Add Invest
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/taxincome">
                    Taxable Income
                  </a>
                </li>
                <li className="nav-item d-flex">
                  <a className="nav-link" onClick={logout} href="/">
                    logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
