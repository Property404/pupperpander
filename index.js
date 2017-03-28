const express = require("express");

/* Set up app */
var app = express();
//~Set embedded JS view engine 
app.set("view engine", "ejs");
app.set("views", "./views");
// Static Pages
app.use("/static", express.static("./static"));

// Render views
app.get("/*", function(req, res){
	console.log("OK - View");
	var url = req.url == "/" ? "/index" : req.url
	res.render(url.substr(1), {});
});

app.listen(80, function() {
	console.log("Blog server running...");
});
