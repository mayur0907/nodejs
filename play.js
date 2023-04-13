console .log("Hello world");

const getProduct = (num1, num2) => num1 * num2;



console.log(getProduct(5, 7)); // Output: 35



const http = require('http');

const server = http.createServer((req, res) => {
  // process.exit();
  console.log(req.url, req.method, req.headers);
 res.setHeader('Content-Type', 'text/html');
 res.write('<html>');
 res.write('<head><title> My First Page</title><head>');
 res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();





}
);
server.listen(4000);

