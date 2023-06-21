const express = require("express");
let server = express();
server.use(express.json());

server.listen(8080, (errors) => {
	if (errors) {
		console.log ("Could not start the server. Error: " + errors)
	} else {
		console.log ("Server start at port 3000");
	}
});

server.get("/", (req, res) => {
 res.send(["This is a Third Party Data Processing API - Reservation API"]);
});

server.get("/api", (req, res, next) => {
 res.json(["Lorem","Ipsum","Dolor","Sit","Amet"]);
});

server.get("/fx-static", (req, res, next) => {
 res.json({"sell": "589.181", "timestamp": "2020-06-17 14:42:34.492974", "buy": "489.1"});
});

server.get("/fx", (req, res, next) => {
 rand1 = Math.floor(Math.random() * 90) + 10;
 rand2 = Math.floor(Math.random() * 90) + 10;

 var today = new Date();
 var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 var dateTime = date+' '+time;

 res.json({"sell": "1987." + rand1, "timestamp": dateTime, "buy": "1787." + rand2});
});

server.get("/random", (req, res, next) => {
 res.json([Math.floor(Math.random() * 90) + 10]);
});

server.get('*',function (req, res) {
        res.redirect('/');
    });

// node app.js
