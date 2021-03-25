const sgMail = require('@sendgrid/mail')


// Set up API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'larrygoodman@wetutorthat.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. Let me know how you like the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'larrygoodman@wetutorthat.com',
        subject: 'Don\'t Go!',
        text: `Listen, ${name}. We love you at We Tutor That. Please don't leave us!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}