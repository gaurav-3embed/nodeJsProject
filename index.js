var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'test9491948185@gmail.com',
    pass: '9491948185'
  }
});

var mailOptions = {
  from: 'test9491948185@gmail.com',
  to: 'uppu431@gmail.com,upendra.manike@gmail.com,gaaurav.prakash@gmail.com',
  subject: 'Sending Email using Node.js if u got mail give a mail to uppu431@gmail.com',
  text: 'Nodejs Learning Now !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});