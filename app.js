var express = require("express");
var app = express();
app.listen(8080, () => {
 console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
 res.send(["Hello!"]);
});

app.get("/api", (req, res, next) => {
 res.json(["Lorem","Ipsum","Dolor","Sit","Amet"]);
});

app.get("/fx-static", (req, res, next) => {
 res.json({"sell": "489.181", "timestamp": "2020-06-17 14:42:34.492974", "buy": "389.1"});
});

app.get("/fx", (req, res, next) => {
 rand1 = Math.floor(Math.random() * 90) + 10;
 rand2 = Math.floor(Math.random() * 90) + 10;

 var today = new Date();
 var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 var dateTime = date+' '+time;

 res.json({"sell": "489." + rand1, "timestamp": dateTime, "buy": "389." + rand2});
});

app.get("/random", (req, res, next) => {
 res.json([Math.floor(Math.random() * 90) + 10]);
});

app.get('*',function (req, res) {
        res.redirect('/');
    });

// node app.js
