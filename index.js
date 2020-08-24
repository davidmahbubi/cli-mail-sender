const prompt = require('prompt-sync')();
const Mailler = require('./libs/mailler');

const mail = new Mailler();

mail
  .sendMail({
    from: prompt('From : '),
    to: prompt('To : '),
    subject: prompt('Subject : '),
    text: prompt('Text : '),
  })
  .catch((err) => {
    console.error('Failed to send an email ! ', err);
  });