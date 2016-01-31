// Songs.js - Defines a backbone collection class for songs.

// Responsibilities
// - Binds all songs to the SongModel Model

var Songs = Backbone.Collection.extend({

  model: SongModel

});