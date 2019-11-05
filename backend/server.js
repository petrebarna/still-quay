const express = require('express');

const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use('/', (req, res, next) =>{
  console.log("In middleware");
  res.send('<h1>Hello from Express!!!</h1>')
})

app.listen(port, () => {
  console.log("Server is running on port: ${port}");
}