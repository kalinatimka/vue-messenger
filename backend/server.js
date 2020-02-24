const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const messages = [
    'Hello',
    'From',
    'Data',
    'Jesus',
];

app.get('/messages', (req, res) => {
    res.send(messages);
});

app.post('/messages', (req, res) => {
    messages.push(req.body.message);
    res.json(messages);
});

app.listen(port, () => {
    console.log('app running');
});