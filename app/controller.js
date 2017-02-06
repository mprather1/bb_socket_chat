var Marionette = require("marionette");
var ChatWindowView = require("./views/ChatWindowView");

var Controller = Marionette.Object.extend({
  
  initialize: function(options){
    
    this.app = options.app;
    this.chatWindowView = new ChatWindowView()
    
    this.app.view.showChildView('main', this.chatWindowView)
  }
});

module.exports = Controller;