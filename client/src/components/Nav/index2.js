import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
          <div class="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                className="brand-logo"
                src="../icons/squeezy-logo-white.png"
                alt="Squeezy"
              />
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </Link>


            <div class="collapse navbar-collapse" id="navbarNav">

              <ul class="navbar-nav">
              <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/orderHistory">Order History</Link>
                </li>
                <li class="nav-item">
                  <button class="nav-link" style={{"margin": "1vw","padding":"0","border":"none","background":"none"}} onClick={logout}>Sign Out</button>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/OurStory">Our Story</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
          <div class="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                className="brand-logo"
                src="../icons/squeezy-logo-white.png"
                alt="Squeezy"
              />
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </Link>

            <div class="collapse navbar-collapse" id="navbarNav">

              <ul class="navbar-nav">
              <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/signup">Signup</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">Login</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/OurStory">Our Story</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      );
    }
  }

  return (
    <nav>
      {showNavigation()}
    </nav>
  );
}

export default Nav;
