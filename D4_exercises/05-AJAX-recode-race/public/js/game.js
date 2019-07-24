// TODO: write your code here


var newGame = document.getElementById("new-game");

var startGame = document.getElementById("start-game");

newGame.addEventListener("click", creatSession);





var racerTable = document.getElementsByClassName("racer_table")[0];



racerTable.addEventListener("keyup", logKey);

function creatSession(event) {
  event.preventDefault();
  var clickedButton = event.currentTarget;
  var sessionUrl = "/sessions";
  fetch(sessionUrl, {
    method: "POST",
    headers: {"Content-Type": "application/json"}
  })
    .then(function(resp) {
      return resp.json(); })
    // Convert data to json
    .then(function(data) {
      
      console.log(data);
      startGame.addEventListener("click", creatGame(data));
    });
  var playersForm=  document.getElementById("palyerform");
  clickedButton.classList.add("start-form");
  // debugger;
  playersForm.classList.remove("players-form");
 
}

function creatGame(d)
{
  

  const sessionId = d["session"].id;
  debugger;
  var sendData = `/sessions/${sessionId}/games`;
  fetch(sendData, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"}
  })
    .then(function(resp) {
      return resp.json(); })
  // Convert data to json
    .then(function(data) {
          
      console.log(data); });
   

}
   

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
