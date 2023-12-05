function searchGames() {
    // grab input and toupper
    var input = document.getElementById('searchBar').value.toUpperCase();
  
    //check all games
    var articles = document.getElementById('games').getElementsByTagName('article');
  
    // loop through games, check if have a match
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