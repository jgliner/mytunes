// SongModel.js - Defines a backbone model class for songs.

// Responsibilities:
// - Define basic methods for all songs that SongQueue will eventually invoke

var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  }
  
});
