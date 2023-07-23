const fs = require('fs');
const path = require('path');
const express = require('express');
const cors= require('cors');
const dotenv = require('dotenv').config()
const sgMail = require("@sendgrid/mail");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/photos/main/:id", (req, res) => {
  let id = req.params.id;
  res.sendFile(path.join(__dirname, `./images/main/${id}.jpg`));
});

app.get("/photos/about/:id", (req, res) => {
  let id = req.params.id;
  res.sendFile(path.join(__dirname, `./images/about/${id}.jpg`));
});

app.get("/Gallery/:gallery/:id", (req, res) => {
  let id = req.params.id;
  let gallery = req.params.gallery;
  res.sendFile(path.join(__dirname, `./images/galleries/${gallery}/${id}.jpg`));
});

app.post("/send_mail", (req, res) => {
  const { email, option, name, phone, message } = req.body;

  sgMail.setApiKey(process.env.SGMAIL_API_KEY);

  const msg = {
    to: ["kamadulski999@gmail.com", "Lilithphotography34@gmail.com"],
    from: "andrew.kamadulski@gmail.com",
    subject: "New Message Request from LilithPhotography.com",
    text: "message: ",
    html: `
        <hr />        
        <span>Name: ${name}</span><br/>
        <span>Email: "${email}"</span><br/>
        <span>Phone: ${phone || "No phone"}</span><br/><br/>
        <span>Type of Session: ${option || "No selection"}</span><br/>
        <span>Message:</span><br/>
        <p>${message || "No message"}</p>
    <hr />
        `,
  };

  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
});




app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
