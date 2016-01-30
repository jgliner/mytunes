// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(song) {
    this.on('change', this.enqueue, this);
  },

  enqueue: function(song) {
    this.add(song);
    console.info('SONG QUEUED')
  }

});