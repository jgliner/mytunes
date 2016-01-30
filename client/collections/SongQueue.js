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
  },

  playNext: function() {
    this.shift();
    console.info('PLAYING NEXT ||', 'Length is now: ', this.length);
    this.at(0).play();
  },

  playFirst: function() {
    this.at(0).play();
  }

});