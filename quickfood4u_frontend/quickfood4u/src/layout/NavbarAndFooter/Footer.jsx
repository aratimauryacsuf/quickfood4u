import {  NavLink } from "react-router-dom";
const Footer = () =>{
return(
    <div className='main-color'>
    <footer className='container d-flex flex-wrap justify-content-between align-items-center py-5 main-color'>
        <p className="col-md-4 mb=0 text-white">©️ QuickFood4U</p>
        <ul className='nav navbar-dark col-md-4 justify-content-end'>
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
    </footer>

</div>
);
}

export default Footer;