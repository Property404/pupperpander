const expres = require("express");

/* Set up app */
var app = express();
//~Set embedded JS view engine 
app.set("view engine", "ejs");
app.set("views", "./views");
// Static Pages
app.use("/static", express.static("./static"));

