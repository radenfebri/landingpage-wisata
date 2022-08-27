import React from "react";

export default function Navbar() {
  return (
    <div class="navbar-area headroom">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="index.html">
                <img src="/images/logo.png" alt="Logo" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>

              <div
                class="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" class="navbar-nav m-auto">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item active">
                    <a href="#home">Home</a>
                  </li>
                  <li class="nav-item">
                    <a href="#about">About </a>
                  </li>
                  <li class="nav-item">
                    <a href="#services">Services</a>
                  </li>
                  <li class="nav-item">
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li class="nav-item">
                    <a href="#blog">Blog</a>
                  </li>
                  <li class="nav-item">
                    <a href="#contact">Contact</a>
                  </li>
                  <li class="nav-item">
                    <a href="#ID">
                      <img
                        src="https://cdn.pixabay.com/photo/2012/04/10/23/01/indonesia-26817_960_720.png"
                        alt=""
                        width="30px"
                        height="20px"
                        class="rounded shadow"
                      />
                    </a>
                    <a href="#EN">
                      <img
                        src="https://cdn.pixabay.com/photo/2012/04/11/15/31/united-28519_960_720.png"
                        alt=""
                        width="30px"
                        height="20px"
                        class="rounded shadow"
                      />
                    </a>
                  </li>
                </ul>
              </div>

              <div class="navbar-btn d-none d-sm-inline-block">
                <a class="main-btn" data-scroll-nav="0" href="#pricing">
                  Download
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
