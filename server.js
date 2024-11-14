const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post('/webhook', (req, res) => {
    const message = req.body.message || 'No message';

    // Replace with your Telegram bot token and chat ID
    const token = '7410108739:AAFpcexuuiNZYd3ZDzgIGPXBKJFGoCMIOeE';
    const chat_id = '5090735114';
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

    axios.get(url)
        .then(response => {
            console.log('Message sent:', response.data);
            res.status(200).send('Alert received and message sent to Telegram');
        })
        .catch(error => {
            console.error('Error sending message:', error);
            res.status(500).send('Error sending message');
        });
});

app.listen(port, () => {
    console.log(`Webhook server running on port ${port}`);
});
