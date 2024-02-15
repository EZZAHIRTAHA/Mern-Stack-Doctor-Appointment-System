const nodeMailer = require('nodemailer');

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: subject,
            text: text
        })
        console.log("email sent successfully")
    } catch (error) {
        console.log(error, "email not sent")
    }
}

module.exports = sendEmail;