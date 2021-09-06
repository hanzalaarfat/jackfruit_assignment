import React from "react";

function Header() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Jack Furite
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
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/income">
                    Add Income
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/invest">
                    Add Invest
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
