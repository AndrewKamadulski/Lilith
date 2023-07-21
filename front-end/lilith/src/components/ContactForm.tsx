import React, { useState } from "react";
import { postData } from "../utils/PostData";

export const ContactForm = () => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [messageText, setMessageText] = useState("");
  const [contactOption, setContactOption] = useState("Other");

  const handleText = (e: any) => {
    setMessageText(e.target.value);
  };

  const onOptionChange = (e: any) => {
    setContactOption(e.target.value);
  };

  const clearInputs = () => {
    setMessageText("Message Sent!");
    setContactName("");
    setContactEmail("");
    setContactPhone("");
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    let contactObj = {
      name: contactName,
      email: contactEmail,
      phone: contactPhone,
      option: contactOption,
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
              <div>
                <div className="contact-label">
                  Type of Session<br></br>
                </div>
                <div>
                <input
                  type="radio"
                  id="Children"                  
                  name="contactOption"
                  value="Children"
                  checked={contactOption === "Children"}
                  onChange={onOptionChange}
                />
                <label htmlFor="Children" className="mx-1">
                  Children
                </label>
                </div>
                <div>
                <input
                  type="radio"
                  id="Newborn"                  
                  name="contactOption"
                  value="Newborn"
                  checked={contactOption === "Newborn"}
                  onChange={onOptionChange}
                />
                 <label htmlFor="Newborn" className="mx-1">
                  Newborn
                </label> 
                </div>
                <div>              
                <input
                  type="radio"
                  id="Maternity"                 
                  name="contactOption"
                  value="Maternity"
                  checked={contactOption === "Maternity"}
                  onChange={onOptionChange}
                />
                <label htmlFor="Maternity" className="mx-1">
                  Maternity
                </label>   
                </div>
                <div>
                <input
                  type="radio"
                  id="Senior"                  
                  name="contactOption"
                  value="Senior"
                  checked={contactOption === "Senior"}
                  onChange={onOptionChange}
                />
                <label htmlFor="Senior" className="mx-1">
                  Senior
                </label>
                </div>
                <div>
                <input
                  type="radio"
                  id="Family"                  
                  name="contactOption"
                  value="Family"
                  checked={contactOption === "Family"}
                  onChange={onOptionChange}
                />
                 <label htmlFor="Family" className="mx-1">
                  Family
                </label>           
                </div>
                <div>
                <input
                  type="radio"
                  id="Other"
                  name="contactOption"
                  value="Other"
                  checked={contactOption === "Other"}
                  onChange={onOptionChange}
                />
                <label htmlFor="Other" className="mx-1">
                  Other
                </label>
                </div>
              </div>
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
