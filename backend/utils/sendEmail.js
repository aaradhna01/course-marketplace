const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yourgmail@gmail.com',           // ✅ apna Gmail
      pass: 'your-app-password'              // ✅ Gmail ka App password
    }
  });

  const mailOptions = {
    from: 'Job Portal <yourgmail@gmail.com>',
    to,
    subject,
    text
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
