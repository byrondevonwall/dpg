require('dotenv').config();
var express = require('express');
var nodemailer = require('nodemailer');
var smtpTransport = require("nodemailer-smtp-transport");
var app = express();

//set headers for localhost to be able to use nodemailer
app.use(function(req, res, next){

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  next();
});

//set transporter variables to send mail to desired address
var transporter = nodemailer.createTransport(smtpTransport({
  host: 'mail.privateemail.com',
  secureConnection: true,
  port: 465,
  auth: {
    user: process.env.DPG_USER,
    pass: process.env.DPG_PASS
  }
}));

//set up routing
app.get('/send', function(req, res){
  console.log(req.query);
  var mailOptions = {
    from: req.query.from,
    to: req.query.to,
    subject: req.query.subject,
    text: req.query.msg
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
      res.end("error"+error);
    } else{
      console.log('message sent: '+ response.message);
      res.end('sent');
    }
  });
});

app.listen(3002, function(){
  console.log('express started on 3002')
})
