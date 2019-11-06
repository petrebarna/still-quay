const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const usersRouter = require('./routes/users');
const quaysRouter = require('./routes/quays');
const tidesRouter = require('./routes/tides');

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);
app.use('/quays', quaysRouter);
app.use('/quays/tides', tidesRouter); //this route should be for only one quay


app.listen(port, () => {
  console.log('Server is running on port:' +  port);
});