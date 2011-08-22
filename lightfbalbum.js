Lightfbalbum = {};
Lightfbalbum.setup = function(data) {
  console.info(data);
  return;
  $('.album').each(function(index, album) {
    album = $(album);
    var album_id = album.data('album-id');
    //$.get('tmp/' + album_id + '.json', function(response) {
    $(data.data).each(function(index, photo) {
      var div = $('<div></div>');
      div.attr('id', 'photo-' + album.id);
      div.css('display', 'inline-block');
      $(div).append('<a href="' + photo.source + '" target="_blank"><img src="' + photo.picture + '" /></a>');
      $(album).append(div).append(' ');
    });

    if (Galleria) {
      $('.album').galleria({ width: 650, height: 500 });
    }
  });
};
