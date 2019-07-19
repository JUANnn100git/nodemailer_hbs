console.log('Server Online');

const sendMail = require('./mail');

var email = 'jvillanueva@dharma-consulting.com';
var subject = 'Prueba de Correo 2';
var template = 'emailConfirmation';
var context = {
    nombre: 'Jhonny Bravo'
}

sendMail(email, subject, template, context);
console.log('SendMail()');