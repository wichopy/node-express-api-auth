const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const { getSecret } = require('./secrets');
const usersRoute = require('./routes/users');

mongoose.Promise = global.Promise;
mongoose.connect(getSecret('dbUri')).then(
  () => {
    console.log('Connected to mongoDB');
  },
  (err) => console.error('Error connecting to mongoDB. If using docker compose, remember to update the host name to the name of the service. IE: if your mongo db service is called db, than the URI needs to be mongodb://db:27017 \n', err)
);

const app = express();
const port = process.env.PORT || 6000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/users', usersRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = { app };
