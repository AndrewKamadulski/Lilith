import React, { useState } from "react";
import { postData } from "../utils/PostData";

export const ContactForm = () => {
  const [messageText, setMessageText] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const handleText = (e: any) => {
    setMessageText(e.target.value);
  };

  const clearInputs = () => {
    setMessageText("Message Sent!");
    setContactName("");
    setContactEmail("");
    setContactPhone("");
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const option = e.target.elements;
    let contactObj = {
      name: contactName,
      email: contactEmail,
      phone: contactPhone,
      message: messageText,
    };
    console.log(contactObj);
    postData("../../send_mail", contactObj).then((data) => {
      console.log(data);
    });

    clearInputs();
  };

  return (
    <>
      <div className="container">
        <div className="justify-content-center pt-5">
          <form onSubmit={onSubmit}>
            <div className="mb-3 px-5">
              <label className="form-label contact-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                onChange={(e) => setContactName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 px-5">
              <label className="form-label contact-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="user@email.com"
                required
              />
            </div>
            <div className="mb-3 px-5"></div>
            <div className="mb-3 px-5">
              <label className="form-label contact-label" htmlFor="phone">
                Phone
              </label>
              <input
                className="form-control"
                type="tel"
                id="phone"
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="(XXX) XXX-XXXX"
                required
              />
            </div>

            <div className="mb-3 px-5">
              <label className="form-label contact-label" htmlFor="message">
                Message
              </label>
              <textarea
                value={messageText}
                onChange={handleText}
                className="form-control"
                id="message"
              >
                {messageText}
              </textarea>
            </div>
            <button
              className="btn btn-outline-dark mt-5"
              type="submit"
              onSubmit={onSubmit}
            >
              Send
            </button>
          </form>
        </div>
        <div className="col-12 mt-5" id="contact-footer">
          <a href="https://www.facebook.com/LilithPhotography34/">
            <img className="contact-icon mx-3" src={require("../icons/Facebook.png")} alt="logo" />
          </a>
          <a href="https://www.instagram.com/lilithphotography/?hl=en"><img className="contact-icon mx-3" src={require("../icons/instagram.png")} alt="logo" /></a>
          <a href="mailto:shellyk@lilithphotography.com"><img className="contact-icon mx-3 " src={require("../icons/email.png")} alt="logo" /></a>
        </div>
      </div>
    </>
  );
};
