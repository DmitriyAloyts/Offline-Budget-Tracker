const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://Dmitriy:Password123@ds161503.mlab.com:61503/heroku_ph1r6rbk", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes here

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});