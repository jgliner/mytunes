// SongQueue.js - Defines a backbone model class for the song queue.

// Responsibilities
// - Extend songs so that they only get new methods when they are in the queue
// - Define callable methods that the AppModel will invoke

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