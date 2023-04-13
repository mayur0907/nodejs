console .log("Hello world");

const getProduct = (num1, num2) => num1 * num2;



console.log(getProduct(5, 7)); // Output: 35




const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  console.log('Mayur');
  res.send('Mayur');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${4000}`);
});

