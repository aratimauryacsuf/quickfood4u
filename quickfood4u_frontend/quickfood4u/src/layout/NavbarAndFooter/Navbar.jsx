import { GiKnifeFork } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import React, {useState} from "react";
import AuthModal from "../../Authentication/AuthModal";
import GroceryList from "../../components/GroceryList";

function Navbar() {

const[isModalOpen, setIsModalOpen] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);

const openModal = () =>{
setIsModalOpen(true);
};

const closeModal = () =>{
    setIsModalOpen(false);
    };

const[isGroceryModalOpen, setIsGroceryModalOpen] = useState(false);

const openGroceryModal = () =>{
  setIsGroceryModalOpen(true);
}

const closeGroceryModal = () =>{
  setIsGroceryModalOpen(false);
  };

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
};

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
          <span className="navbar-toggler-icon"></span>
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

            {/* <li className="nav-item">
              <NavLink className="nav-link text-white" to="#">
                Meal Planning
              </NavLink>
            </li> */}
          </ul>
          <ul className="navbar-nav ms-auto">
            { isLoggedIn && (
          <li className="nav-item m-1">
          <NavLink className="nav-link text-white" to="#" onClick={openGroceryModal}>
                Grocery List
              </NavLink>
              
            </li>
            )}
            <li className="nav-item m-1">
              {
                isLoggedIn ? (
                  <button className="btn btn-outline-light" onClick={handleLogout}>
                      Logout
                  </button>
              )
                :
             ( <button onClick={openModal} className="btn btn-outline-light" >
                Login
              </button>
             ) }
            </li>
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <AuthModal closeModal={closeModal} setIsLoggedIn={setIsLoggedIn} />
              </div>
            </div>
          </div>
        </div>
      )}
      {
        isGroceryModalOpen && (
          <GroceryList  isOpen={isGroceryModalOpen} closeGroceryModal={closeGroceryModal} />
        )
      }
    </nav>
  );
}

export default Navbar;
 