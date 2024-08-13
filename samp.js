const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'labf.html'));
});

app.post('/submit-fruit', (req, res) => {
    console.log('Received fruit data:', req.body);
    res.send('Fruit data received.');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});