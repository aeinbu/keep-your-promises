var express = require("express");
var app = express();
var fs = require("fs");
var _ = require("lodash")

app.use(express.static("dist"));

app.use(function(req, res, next) {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

app.use(function(req, res, next) {
    // console.log("Delaying...");
    setTimeout(function() {
        // console.log("Delayed");
        next();
    }, 5000);
});

app.get("/fylker", function (req, res) {
    fs.readFile("./data.json", "utf-8", function(err, data){
        data = JSON.parse(data);
        data = _.keys(data);
            
        return res.send(data);
    });
});

app.get("/kommuner/i/:id", function (req, res) {
    fs.readFile("./data.json", "utf-8", function(err, data){
        data = JSON.parse(data);
        data = data[req.params.id];
        data = data.map(item => item.kommune);
        
        return res.send(data);
    });
});


var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});