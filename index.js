const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/count-characters', (req, res) => {
    const text = req.body.text || '';
    const characterCount = text.length;
    res.json({ count: characterCount });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
