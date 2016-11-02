var sep = '`';

function rr(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random()*(max - min) + min);
}

function choose(collection, space) {
  var after = (space) ? ' ' : '';
  return collection[rr(collection.length)] + after;
}

function resolveNode(node) {
  var alternatives = node.innerHTML;
  if (alternatives.indexOf(sep) > 0) {
    node
      .html(choose(alternatives.split(sep)))
      .addClass('is-done');
  }
}

function writeNovel(novel) {
  $('q').each(resolveNode);
}

var novel = document.querySelector('.c-main');
writeNovel(novel);
