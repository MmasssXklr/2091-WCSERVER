const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/ab*cd', function(req,res) {
    console.log("Got a GET ");
    res.send('Pattern');
});

const port = process.env.PORT || 3000;
app.listen(port,() => {

console.log(`Listening on port ${port}`);
})