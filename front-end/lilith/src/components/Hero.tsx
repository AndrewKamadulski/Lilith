import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import { validateEmail } from "../utils/validateEmail";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
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
        <div className="display-3">
          Join our mailing list for special offers!
        </div>
        <div className="mt-3">
        <button
          type="button"
          className="mt-5 btn btn-lg btn-outline-dark"
          onClick={showModal}
        >
          Sign Up
        </button>
        </div>
      </div>

      <>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Email Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              style={{ width: 300 }}
              placeholder="Please enter your email address"
              onChange={(e) => setUserEmail(e.target.value)}
            ></input>
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
