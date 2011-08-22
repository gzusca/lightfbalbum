Lightfbalbum = {};

$('.album').each(function(index, album) {
  album = $(album);
  var album_id = album.data('album-id');
  var url = album.data('use-cache') ? 'cache/' + album_id + '.json' : 'http://graph.facebook.com/' + album_id + '/photos?limit=100&callback=?';
  $.getJSON(url, function(response) {
    $(response.data).each(function(index, photo) {
      var div = $('<div></div>');
      div.attr('id', 'photo-' + album.id);
      div.css('display', 'inline-block');
      $(div).append('<a href="' + photo.source + '" target="_blank"><img src="' + photo.picture + '" /></a>');
      $(album).append(div).append(' ');
    });
  });
});

$(window).load(function() {
  if (!Galleria) return;

  $('.album').galleria({ width: 650, height: 500 });
});
