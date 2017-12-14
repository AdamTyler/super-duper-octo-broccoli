// Menu for game selection
(function() {

  const hideMenu = function() {
    let menu = document.getElementsByClassName('js-game')[0];
    menu.classList.add('playing');
  }
  
  const showMenu = function() {
    let menu = document.getElementsByClassName('js-game')[0];
    menu.classList.remove('playing');
  }
  
  const initGame = function(gameName) {
    document.getElementsByClassName('game-title')[0].innerHTML = gameName;
  }
  
  const initMenu = function() {
    // start correct game based on users pick
    let tiles = document.getElementsByClassName('game-tile');
    for(let i = 0; i < tiles.length; i++) {
        let tile = tiles[i];
        tile.onclick = function() {
          console.log('start game: ', tile.id);
          hideMenu();
          initGame(tile.id);
        }
    }
    // set back button to go to home menu
    document.getElementById('home-btn').addEventListener('click', showMenu);
  }
  
  initMenu();

})();