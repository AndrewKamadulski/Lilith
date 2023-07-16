import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import { validateEmail } from "../utils/validateEmail";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [isUserSignedUp, setIsUserSignedUp] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const handleEmailSignUp = () => {
    if (validateEmail(userEmail)) {
      console.log("email sent");
      hideModal();
    } else {
      console.log("invalid email");
    }
  };

  return (
    <>
 
    <div className="w-100 homepage-hero" style={{ height: 550 }}>
      <div className="d-flex flex-column align-items-center"> 
        <span className="display-1">
          Subscribe!
        </span><br></br>
        <p className="mt-2 hero-text">Sign up to hear about specials, sales, and events.</p>
        <div className="mt-3">
        <button
          type="button"
          className="mt-3 btn btn-lg btn-outline-dark"
          onClick={showModal}
        >
          Sign Up
        </button>
        </div>
      </div>

      
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Body>
            <div>
              <div>
           <label className="py-2" htmlFor="emailListSignupName">Name</label>
              </div>
            <input
              id="emailListSignupName"
              placeholder="name"
              style={{ width: 300 }}
              onChange={(e) => setUserName(e.target.value)}
            >              
            </input>
            </div>
            <div>
            <div>
            <label className="py-2" htmlFor="emailListSignup">Email</label>
            </div>
            <input
              id="emailListSignup"
              placeholder="user@email.com"
              style={{ width: 300 }}
              onChange={(e) => setUserName(e.target.value)}
            >              
            </input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Close</button>
            <button onClick={handleEmailSignUp}>Send</button>
          </Modal.Footer>
        </Modal>
        </div>

        <div className="col-12">
    <p className="mt-5">
      <hr></hr>
    </p>
  </div>
  <div className="col-12 m-1 d-flex align-items-center justify-content-center">
    <div className="d-none d-lg-block col-lg-3 mx-3">
      <img
        className="about-section-image"
        src="http://www.lilithphotography.com/photos/about/Clouds"
        alt=""
      />
    </div>
    <div className="col-12 col-lg-3 mx-3">
      <img
      className="about-section-image"
        src="http://www.lilithphotography.com/photos/about/Frog"
        alt=""
      />
    </div>
    <div className="d-none d-lg-block col-3 mx-3">
      <img
      className="about-section-image"
        src="http://www.lilithphotography.com/photos/about/Hands"
        alt=""
      />
    </div>
  </div>
  <div className="col-12 d-flex m-1">
    <p className="fs-4 mt-5 p-5">
      <span className="display-2">
        Art you can enjoy every day!
      </span><br></br><hr></hr>
      I would love the chance to meet your family and make
      some art together. I look forward to meeting with you and learning
      how I can help you fulfill your vision. Whether you are welcoming a
      new baby or documenting the growth of your child, I know how
      incredibly important these images are as the moments are so
      fleeting. Your session will be precisely tailored to create
      beautiful images that you'll love now and forever!
      <br></br>
      <div className="d-flex justify-content-center">
      <Link to="/Contact" type="button" className="btn btn-lg btn-outline-dark mt-5">Contact</Link>
      <hr className="mt-5"></hr>
      </div>
      
    </p>     
    
  </div>
  
      </>
      
    
  );
};
