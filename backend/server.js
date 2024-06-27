const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: subject ? (`Portfolio Contact Submission: ${subject}`) : 'Portfolio Contact Submission',
        text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        res.status(500).send('Error sending email');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
