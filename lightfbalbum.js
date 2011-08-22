Lightfbalbum = {};

$('.album').each(function(index, album) {
  album = $(album);
  var album_id = album.data('album-id');
  var url = album.data('use-cache') ? 'cache/' + album_id + '.json' : 'http://graph.facebook.com/' + album_id + '/photos?limit=100&callback=?';
  $.getJSON(url, function(response) {
    var galleriaData = [];
    $(response.data).each(function(index, photo) {
      galleriaData.push({
        thumb: photo.picture,
	image: photo.source,
	link: photo.link
      });
    });
    $(album).galleria({ dataSource: galleriaData, width: 650, height: 500 });
  });
});
