import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg main-color text-color-dark navbar-dark py-3">
      <div className="container-fluid d-flex">
        <span className="navbar-brand mx-3 fs-2"> Lilith Photography</span>
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
        <div className="mx-3">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav fs-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Galleries">
                Galleries
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </li>            
          </ul>
          </div>
        </div>      
      </div>
    </nav>   
  );
};
