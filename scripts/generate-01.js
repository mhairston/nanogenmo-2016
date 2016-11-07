var sep = '`';

function rr(min, max) {
  var rmin = (max) ? min : 0;
  var rmax = (max) ? max : min;
  return Math.random() * (rmax - rmin) + rmin;
}

function rri(min, max) {
  return Math.floor(rr(min,max));
}

function choose(collection, space) {
  var after = (space) ? ' ' : '';
  return collection[rri(collection.length)] + after;
}

function resolveAlternates(novel) {
  var $el, altWords;
  $('.a', novel).each(function(index, el) {
    $el = $(el);
    altWords = $el.html().split(sep);
    if ($el.size() > 0) {
      $el.html(choose(altWords));
    }
  });
}

function scan(src, windowsize) {
  var chunk;
  var len = src.length;
  var slices = 50;
  var n = 0;
  src = src + '   ';

  while ((n + windowsize) <= len) {
    chunk = '<span class="a' + n + '">' + src.slice(n, n + windowsize) + '</span>';
    $('.c-main').append(chunk);
    n += rr(0,2);
  }
}

function columns(novel,text) {
  var words = columns.split(' ');
  novel.append('');
}
