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
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
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
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup">
                    Sign Up
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
