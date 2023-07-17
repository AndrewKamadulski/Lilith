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
      <div className="container contact-form mt-3 col-12 col-lg-6">
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
              <div className="d-flex justify-content-center">
            <button
              className="btn btn-outline-dark mt-4"
              type="submit"
              onSubmit={onSubmit}
            >
              Send
            </button>
            </div>
            </div>
            
          </form>
        </div>      
      </div>
    </>
  );
};
