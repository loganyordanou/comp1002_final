// let's help people find their game with this simple search
function searchGames() {
    // grab what's typed and go uppercase, because case sensitivity is a pain
    var input = document.getElementById('searchBar').value.toUpperCase();
  
    // all the games we've got
    var articles = document.getElementById('games').getElementsByTagName('article');
  
    // loop through games, check if we've got a match
    for (var i = 0; i < articles.length; i++) {
      // just the game title, please
      var title = articles[i].getElementsByTagName('h3')[0].innerText;
  
      // if we find it, show it; if not, hide it
      if (title.toUpperCase().includes(input)) {
        articles[i].style.display = '';
      } else {
        articles[i].style.display = 'none';
      }
    }
  }