require('dotenv').config();

const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

// Step 1
let transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    secure: process.env.NODEMAILER_SECURE,
    auth: {
        user: process.env.NODEMAILER_AUTH_USER,
        pass: process.env.NODEMAILER_AUTH_PASS
    }
});

let handlebarOptions = {
    viewEngine: {
      partialsDir: './views/',
      layoutsDir: './views/',
      defaultLayout: null
    },
    viewPath: './views/',
    extName: '.hbs'
  };

transporter.use('compile', hbs(handlebarOptions));

const sendMail = (email, subject, template, context) => {
    // Step 2
    let mailOptions = {
        from: process.env.NODEMAILER_OPT_FROM,
        to: email,
        subject: subject,
        text: 'IT works',
        template: template,
        context: context
    };

    // Step 3
    transporter.sendMail(mailOptions)
        .then( info => {
            console.log('Email Send:');
        })
        .catch( err => {
            console.log('Error Occurs:', err);
        });
}


module.exports = sendMail;
