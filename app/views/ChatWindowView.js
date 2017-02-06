var io = require("socket.io-client")
var socket = io();
var ChatWindowView = Backbone.Marionette.View.extend({
  template: require("../templates/chat-window-view-template.html"),
  initialize: function(){
    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg))
    })   
  },
  events: {
    'click button': 'handleClick'
  },  
  handleClick: function(e){
    e.preventDefault()
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  }  
});

module.exports = ChatWindowView;