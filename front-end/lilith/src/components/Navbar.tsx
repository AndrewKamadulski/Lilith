import { Link } from "react-router-dom";

export const Navbar = () => {
    return(

<nav className="navbar navbar-expand-lg main-color">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 px-3" to="/">Lilith Photography</Link>    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>      
    <div className="collapse navbar-collapse fs-4" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/Home" className="nav-link" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>      
        <li className="nav-item">
          <Link className="nav-link" to="/Galleries">Galleries</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
      </ul> 
  
  </div>
  </div>
</nav>

);
}
