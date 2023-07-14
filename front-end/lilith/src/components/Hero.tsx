import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import { validateEmail } from "../utils/validateEmail";

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
    <div className="mt-5 w-100 homepage-hero" style={{ height: 550 }}>
      <div>
        <div className="display-2">
          Subscribe!
        </div>
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

      <>
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
      </>
    </div>
  );
};
