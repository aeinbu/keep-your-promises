var express = require("express");
var app = express();
var fs = require("fs");
var _ = require("lodash")
var connectBrowserSync = require('connect-browser-sync')

exports.start = function(options) {

    if(options && options.browserSync){
        app.use(connectBrowserSync(options.browserSync));
    }

    app.use(express.static("dist"));

    app.use(function (req, res, next) {
        res.header("Content-Type", "application/json; charset=utf-8");
        next();
    });

    app.use(function (req, res, next) {
        setTimeout(function () {
            next();
        }, 2000);
    });

    app.get("/fylker", function (req, res) {
        fs.readFile("./data.json", "utf-8", function (err, data) {
            data = JSON.parse(data);
            data = _.keys(data);

            return res.send(data);
        });
    });

    app.get("/kommuner/i/:fylke", function (req, res) {
        fs.readFile("./data.json", "utf-8", function (err, data) {
            data = JSON.parse(data);
            data = data[req.params.fylke];
            data = data.map(item => item.kommune);
            return res.send(data);
        });
    });

    app.get("/befolkningsdata/for/:kommune", function (req, res) {
        fs.readFile("./population.json", "utf-8", function (err, data) {
            data = JSON.parse(data);
            data = data[req.params.kommune];
            return res.send(data);
        });
    });
    
    app.get("/test", function(req, res){
        fs.readFile("./population.json", "utf-8", function (err, data) {
            data = JSON.parse(data);
            data = _(data)
                .groupBy(item => item.kommune)
                .mapValues(item => _.fromPairs(item.map( subItem => {
                    return [subItem.variabel, subItem.verdi];
                })));
                

            return res.send(data);
        });        
    });
    
// line.indexOf("Folketalet ved inngangen av kvartalet")>=0 ||
// line.indexOf("Fødselsoverskot")>=0 ||
// line.indexOf("Nettoinnflytting, inkl. inn- og utvandring")>=0 ||
// line.indexOf("Folkevekst")>=0 ||
// line.indexOf("Folketalet ved utgangen av kvartalet")>=0


    var server = app.listen(8081, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log("App listening at http://%s:%s", host, port);
    });
}
