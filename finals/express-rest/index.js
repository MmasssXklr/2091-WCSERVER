const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('My New App!');
});
app.get('/api/heroes', (req, res) => {
    res.send(['Superman', 'Iron Man', 'Batman', 'Hulk']);
    });

app.listen(3000, () => console.log('Listening on port 3000'));

app.get('/api/heroes/:id', (req, res) => {
    res.send(req.params.id);
}); //Figure 4 (25)

app.get('/api/heroes/:title/:publisher', (req, res) => {
    res.send(req.params);
}); //Figure 5 (batman)

app.get('/api/heroes/:title/:publisher', (req, res) => {
    res.send([req.params, req.query]);
}); //Figure 6 (DC)
