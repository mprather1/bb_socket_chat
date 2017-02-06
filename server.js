var express = require("express");
var app = express();
var http = require("http").Server(app)
var io = require("socket.io")(http)
var bodyParser = require("body-parser");
var path = require("path");
var config = require("./_config");
var environment = process.env.NODE_ENV || "development";
var morgan = require("morgan");
var routes = require("./routes");
var port = process.env.PORT || 8000

if (environment === "development"){
  app.use(morgan('dev'));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'app', 'static')));

app.use('/api', routes);

io.on('connection', function(socket){
    socket.on("chat message", function(msg){
      io.emit('chat message', msg);
    });
});

var server = http.listen(port, function(){
  if(environment === "development"){
    console.log(("Listening on port " + port + "..."))
  }
});

module.exports = server;