const express = require("express");
const path = require("path");
const index = require("./routes/index");
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
// initialize express
const app = express();
// we use the middleware bodyParse 
/* 
  The { extended: false } option instructs body-parser to use the
  querystring library for URL parsing.
*/
app.use(bodyParser.urlencoded({
  extended: false
}));
//register the static Express.js middleware to host the public directory
app.use(express.static(path.join(__dirname, 'public'))); 
// mount our index route 
app.use('/', index);
// start our express server 
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); 
