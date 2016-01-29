var express = require('express');
var app = express();
var React = require('react');
var Griddle = React.createFactory(require('griddle-react'));

var Comment = React.createFactory(require('../build/comment'));
var Comments = React.createFactory(require('../build/comments'));
var HelloWorld = React.createFactory(require('../build/hello_world'));


var Components = {
    Comment: Comment,
    Comments: Comments,
    HelloWorld: HelloWorld,
    Griddle: Griddle
};

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.post('/', function (req, res) {
    console.log('hello');
    var data = JSON.parse(req.body.data);
    console.log(data);
    var component = Components[req.body.component_name];
    res.send(React.renderToString(component(data)));
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('react app listening at http://%s:%s', host, port);

});
