// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.

// Responsibilities:
// - Build out individual DOM elements for the whole queue
// - Send intent to remove a song on click events to the queue

var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));

  }
});
