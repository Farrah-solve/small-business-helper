const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  }

require('.components/mainpage')(app);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactNotes');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/business-helper',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );