// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    if (this.collection !== undefined) {
      this.$el.html('<th>Queue</th>').append(
        this.collection.map(function(song) {
          return new SongQueueEntryView({model: song}).render();
        })
      );
    }
    return this.$el;
  }

});