import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { validateEmail } from "../utils/validateEmail";
import { postData } from "../utils/PostData";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [isUserSignedUp, setIsUserSignedUp] = useState(false);
  console.log(isUserSignedUp);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const handleEmailSignUp = () => {
    console.log(validateEmail(userEmail));
    if (validateEmail(userEmail)) {
      let heroFormData = {
        name: userName,
        email: userEmail,
        message: "Email List Signup",
      };

      // postData("../../send_mail", heroFormData).then((data) => {
      //   console.log(data);
      // });

      setIsUserSignedUp(true);
      hideModal();
    } else {
      window.alert("Please enter a valid email address.");
    }
  };

  if (!isUserSignedUp) {
    return (
      <>
        <div className="homepage-hero">
          <div className="d-flex flex-column align-items-center ">
            <span className="display-1">Subscribe!</span>
            <br></br>
            <p className="mt-2 hero-text">
              Sign up to hear about specials, sales, and events.
            </p>
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
                  <label className="py-2" htmlFor="emailListSignupName">
                    Name
                  </label>
                </div>
                <input
                  id="emailListSignupName"
                  placeholder="name"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                ></input>
              </div>
              <div>
                <div>
                  <label className="py-2" htmlFor="emailListSignup">
                    Email
                  </label>
                </div>
                <input
                  id="emailListSignup"
                  placeholder="user@email.com"
                  onChange={(e) => setUserEmail(e.target.value)}
                ></input>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={hideModal}>Close</button>
              <button onClick={handleEmailSignUp}>Send</button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  } else {
    return (
      <div className="homepage-hero">
        <div className="d-flex flex-column align-items-center ">
          <span className="display-3">Thanks for Signing Up!</span>
          <br></br>
          <p className="mt-2 hero-text text-center">
            Watch for announcements and special deals
          </p>
        </div>
      </div>
    );
  }
};
