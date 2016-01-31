// SongQueueView.js - Defines a backbone view class for the song queue.

// Responsibilities:
// - Consolidate all SongQueueEntryView elements
// - Listen for a change and rebuild the DOM when fired

var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    // console.log(this.collection);

    if (this.collection !== undefined) {
      this.$el.html('<th>Queue</th>').append(
        this.collection.map(function(song) {
          return new SongQueueEntryView({model: song}).render();
        })
      );
    }
    else {
      this.$el.html('<th>Queue</th>');
    }
    return this.$el;
  }

});