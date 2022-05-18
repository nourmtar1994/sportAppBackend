const express = require("express");
const mongoose = require("mongoose");

require("dotenv/config");

//HOW to we start lesteninig te the server
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connect to database ");
});

module.exports = mongoose;
