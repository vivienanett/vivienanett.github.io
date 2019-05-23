var $content = document.getElementById('content');
var $nav = document.querySelectorAll('nav a');

function load(page) {
  fetch('content/' + page + '.html').then(function(response) {
    if (response.ok) {
      return response.text();
    }
    else {
      throw new Error();
    }
  }).catch(function() {
    return 'Hiba az oldal betöltése közben.';
  }).then(function(text) {
    $content.innerHTML = text;
  });
}

function hashChanged() {
  var next = 'main';

  if (location.hash) {
    next = location.hash.substr(1);
  }

  load(next);

  for (var i = 0; i < $nav.length; ++i) {
    if ($nav[i].href.endsWith(next)) {
      $nav[i].classList.add('active');
    }
    else {
      $nav[i].classList.remove('active');
    }
  }
}

window.addEventListener('hashchange', function() {
  hashChanged();
});

hashChanged();
