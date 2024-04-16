import React, { useState } from "react";
import axios from "axios";
//import { NotificationContainer, NotificationManager } from 'react-notifications-component';

//import { request } from "./axios_utility";

function AuthModal({ closeModal, setIsLoggedIn}) {
 // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(true);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

//   const handleLogout = () => {
//     // Clear local storage
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     setIsLoggedIn(false);
//     closeModal(); // Close the modal after logout
// };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        loginFormData
      );
      // Handle login logic
      console.log("Login successful:", response.data);
      // NotificationManager.success("Login successful!");

 // Store the JWT token in local storage
      localStorage.setItem('token', response.data.jwt);
      localStorage.setItem('username', loginFormData.username);
      setIsLoggedIn(true);
      closeModal();
      setShowModal(false);
      
    } catch (error) {
      // NotificationManager.error("Login failed. Please check your credentials.");
      console.error("Error in Login:", error);
    }

    console.log("Login button clicked");
  };

  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(registerFormData);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        registerFormData
      );
      console.log("Registration successful:", response.data);
      // Handle success, such as redirecting to login page or showing a success message

      // NotificationManager.success("Registration successful!");
      closeModal();
      setShowModal(false);
      // if (closeModal) {
      //   closeModal();
      // }
    } catch (error) {
      //NotificationManager.error("Registration failed. Please try again later.")
      console.error("Error registering user:", error);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <>
      {showModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header modal-color ">
                {/* <h5 className="modal-title">Login</h5> */}
                <ul className="nav nav-tabs ">
                  <li className="nav-item">
                    <button
                      className={`nav-link  ${
                        activeTab === "login" ? "active" : ""
                      }`}
                      onClick={() => handleTabChange("login")}
                    >
                      Login
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link  ${
                        activeTab === "register" ? "active" : ""
                      }`}
                      onClick={() => handleTabChange("register")}
                    >
                      Register
                    </button>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    closeModal(); // Call closeModal function provided by parent component
                    setShowModal(false); // Close modal
                  }}
                ></button>
              </div>
              <div className="modal-body">
                {activeTab === "login" ? (
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={loginFormData.username}
                        onChange={handleLoginInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={loginFormData.password}
                        onChange={handleLoginInputChange}
                      />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleRegister}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={registerFormData.name}
                        onChange={handleRegisterInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={registerFormData.email}
                          onChange={handleRegisterInputChange}
                        />
                      </div>
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={registerFormData.username}
                        onChange={handleRegisterInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={registerFormData.password}
                        onChange={handleRegisterInputChange}
                      />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Register
                      </button>
                    </div>
                  </form>
                )}
              </div>
              {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Close
            </button>
            
          </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default AuthModal;
