 const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'aljami1379@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}! Let me know how you get along with the app!`
  })
}

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'aljami1379@gmail.com',
    subject: 'Sorry to see you go :\'(',
    text: `Goodbye, ${name}. Hope you see you again soon!`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}
