var express = require('express');
var app = express();
var Api = require('./api');

// allow CORS
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', function(req, res) {
    res.send(JSON.stringify({msg: "mea culpa!"}));
});

app.get('/api/department/:id', function(req, res) {
    var id = req.params.id;
    Api.getDepartmentDetail(id).then(function(data) {
        res.send(JSON.stringify({data: data}));
    });
});

app.get('/api/course/:id', function(req, res) {
    var id = req.params.id;
    Api.getCourseDetail(id).then(function(data) {
        res.send(JSON.stringify({data: data}));
    });
})

var server = app.listen(3000, function() {
    console.log("App started on :" + server.address().port);
});
