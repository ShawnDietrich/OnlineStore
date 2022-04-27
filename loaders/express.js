const express = require('express')




module.exports = (app) => {

// Add middleware for handling CORS requests from index.html
//setup cors
const cors = require("cors");
app.use(cors());

// Add middware for parsing request bodies here:
const bodyParser = require("body-parser");
app.use(bodyParser.json());
}