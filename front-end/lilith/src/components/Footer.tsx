import { Link } from "react-router-dom";
import { SocialMedia } from "./SocialMedia";

export const Footer = () => {
  return (
    <div className="main-color mt-3 text-muted">
      <footer className="container d-flex flex-wrap justify-content-between py-5 main-color">
        <div className="col-4">
          <p className="col-md-6 mb-0 fs-5">© Lilith Photography</p>
        </div>
        <div className="d-none d-lg-block">
          <SocialMedia />
        </div>
        <ul className="nav navbar-dark col-md-4 justify-content-end fs-5">
          <li className="nav-item">
            <Link className="nav-link px-2 text-muted" to="/Home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 text-muted" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};
