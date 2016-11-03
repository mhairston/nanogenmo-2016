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

function resolve(el) {
  var $el = $(el);
  var altWords = $el.html().split(sep);
  if ($el.size() > 0) {
    $el.html(choose(altWords));
  }
}

function writeNovel(novel) {
  $('.a', novel).each(function(index, el) {
    resolve(el);
  });
}

$(document).ready(function() {
  var novel = document.querySelector('.c-main');
  writeNovel(novel);
});
