// TODO: write your code here


document.addEventListener("keyup", logKey);

function logKey(x) {
   
  //log.textContent = ` ${x.code}`;
  var racerTable = document.getElementsByClassName("racer_table")[0];
  //  var cells = racerTable.getElementsByTagName('td');
  var  player = racerTable.getElementsByClassName("active");
  if (x.code === "KeyP") {
    updatePlayerPosition(player[0]);
  }
  else if ( x.code === "KeyQ") {
    updatePlayerPosition(player[1]);

  }
}


function updatePlayerPosition(player) {
 
  player.nextElementSibling.classList.add("active");
  player.classList.remove("active");
    
}
