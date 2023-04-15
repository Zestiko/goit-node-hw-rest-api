const nodemailer = require("nodemailer");

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "zestiko@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendMail = (data) => {

    const email = {
      ...data,
      from: "zestiko@meta.ua",
      
    };
  transport
    .sendMail(email)
    .then(() => console.log("Email send "))
    .catch(({ message }) => console.log(message));
};

module.exports = sendMail;
