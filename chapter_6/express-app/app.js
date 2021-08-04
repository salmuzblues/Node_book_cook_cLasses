const express = require("express");
const path = require("path");
const index = require("./routes/index");
const PORT = process.env.PORT || 3000;
// initialize express
const app = express();
//register the static Express.js middleware to host the public directory
app.use(express.static(path.join(__dirname, 'public'))); 
// mount our index route 
app.use('/', index);
// start our express server 
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); 
