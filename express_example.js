var express = require("express");
var app = express();
console.log(__dirname + '/.');
//app.use('/static', express.static(__dirname + '/.'));
app.use(express.static(__dirname + '/.'));

app.get("/", function(req, res) {
	res.send("Hello world! <br> Ajoutez \"/hello\" là-haut dans l'URL...");
	//res.send("Ajoutez \"/hello\" là-haut dans l'URL...");
	res.end();
})
app.get("/hello", function(req, res) {
	res.send("Hello ça veut dire bonjour! <a href=\"world\">World</a>")
	res.end()
})

app.get("/world", function(req, res) {
	res.send("World ça veut dire monde. Ensemble <a href=\"/\">ça fait...</a>")
	res.end()
})


app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');


