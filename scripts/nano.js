

// Do all the text generation and processing in this function.
function writeNovel(novel) {
  var src;
  // $.get('../source_text/01.html', function(data) {
  //   novel.append(data);
  // });
  // Processes run on the whole text;
  // Choose text snippets when alternates are listed:
  resolveAlternates(novel);
  $src = $('.coretext01');
  txt = $src.text();
  $src.text(
    scan(txt, 4)
  );
}

$(document).ready(function() {
  var novel = document.querySelector('.c-main');
  writeNovel(novel);
});
