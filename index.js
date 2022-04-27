const express = require("express"),
  app = express(),
  port = 3000;
const loaders = require("./loaders");

async function startServer() {
  //call loaders index
  loaders(app);

  app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
  });
}


//function to start the server
startServer();