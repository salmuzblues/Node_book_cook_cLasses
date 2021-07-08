// import nodeMailer 
const nodemailer = require('nodemailer');
// we need to set up the transport object to connect to the 
// SMTP
const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 4321
});
// call the sendMail() function on the transport object 
transporter.sendMail(
  {
    from: 'carranza.alarcon.juan@gmail.com',
    to: 'salmuzblues@gmail.com',
    subject: 'Hello',
    text: 'Hello world'
  }, // catch Error and info, a callback
  (err, info) => {
    if(err) {
      console.log(err);
    }
    console.log('Message Sent: ', info);
  }
);