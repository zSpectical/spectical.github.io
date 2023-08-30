const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


sgMail.setApiKey('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');

app.use(bodyParser.json());
app.use(cors()); // 

app.post('/send-email', (req, res) => {
    const { yourName, yourEmail, yourMessage } = req.body;

    const msg = {
        to: 'kian.shirvani@outlook.com', // Your email
        from: 'kian.shirvani@outlook.com', // Your domain email address
        subject: `New Message from ${yourName} (${yourEmail})`,
        text: yourMessage,
    };

    sgMail.send(msg)
        .then(() => res.status(200).send('Email sent!'))
        .catch((error) => {
            console.error(error);
            if (error.response) {
                console.error(error.response.body)
            }
            res.status(400).send('Email not sent.');
        });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
});
