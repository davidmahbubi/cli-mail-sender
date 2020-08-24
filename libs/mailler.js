require('dotenv').config({
  path: `${__dirname}/../.env`,
});
const nodemailer = require('nodemailer');
const ora = require('ora');

const spinner = ora('Sending email');

class Mailler {
  constructor() {
    const { MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD } = process.env;
    this.transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: MAIL_PORT,
      auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD,
      },
    });
  }

  /**
   *sendMail method
   *
   * @param {object} mail
   */
  sendMail(mail) {
    spinner.start();
    return new Promise((resolve, reject) => {
      this.transporter
        .sendMail(mail)
        .then(() => {
          spinner.succeed('Email sended');
          resolve();
        })
        .catch((err) => {
          spinner.fail('Send email failed');
          reject(err);
        });
    });
  }
}

module.exports = Mailler;
