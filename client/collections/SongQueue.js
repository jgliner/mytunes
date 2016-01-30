// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(song) {
  },

  enqueue: function(song) {
    this.add(song);
    console.info('SONG QUEUED ||', 'Length is now: ', this.length);
  },

  dequeue: function(song) {
    this.remove(song);
    console.info('SONG DEQUEUED')
  }

});