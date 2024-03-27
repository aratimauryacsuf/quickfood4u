import { GiKnifeFork } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-color py-3 w-100">
      <div className="d-flex align-items-center justify-content-between container">
        <div className="d-flex align-items-center py-4 text-white">
          <GiKnifeFork style={{ fontSize: "2rem", lineHeight: "05" }} />

          <Link
            to="/"
            className="text-dark text-decoration-none fs-3 font-weight-normal text-white"
            style={{ fontFamily: "'Lobster Two', cursive", lineHeight: "0.5" }}
          >
            QuickFood4U
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll fs-5" style={{ fontFamily: "'Lobster Two', cursive" }}>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/veggie">
                Veggie
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/popular">
                Popular
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item m-1">
              <NavLink type="button" to="/login" className="btn btn-outline-light">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
