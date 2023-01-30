// Task name: Lab act 3 Creating nodes
// Maniago, Charmagne Dale G.
// WD-201

var http = require('http');
var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><body><p>This is home Page </p></body></html>');
    res.end();
  } else if (req.url == '/root') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><p><b>Welcome to my Node.js Application<b> Welcome Charmagne Maniago. This is an activity about basics of Node.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><p><b>This is the About Page<b> Hello Charmagne Maniago. This activity will teach on how to deal with a simple server and local modules in Nodes.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><p><b>This is the Contact Page<b>Charmagne Maniago, if you want additional details aboput this activity go to this site: https://www.tutorialsteacher.com/nodejs/nodejs-tutorials</p></body></html>'
    );
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><p><b>This is the Gallery Page<b></p></body></html>'
    );
    res.end();
  } else res.end('Invalid Request!');
});
server.listen(5000);
console.log('Node.js web server at port 5000 is running...');
