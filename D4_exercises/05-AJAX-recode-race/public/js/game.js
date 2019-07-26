// TODO: write your code here

var hashdata = {};
var newGame = document.getElementById("new-game");

var startGame = document.getElementById("start-game");

newGame.addEventListener("click", creatSession);

var racerTable = document.getElementsByClassName("racer_table")[0];

var playersForm = document.getElementById("palyerform");
var boardGame = document.getElementById("board");
var score = document.getElementById("sboard");
var players = [];
function play() {
  // debugger;
  boardGame.classList.remove("game-table");
  players[0] = hashdata["game"]["player"][0];

  players[1] = hashdata["game"]["player"][1];

  document.addEventListener("keyup", logKey);

}






function game() {
  var timeleft = 10;
  var downloadTimer = setInterval(function () {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Go!!";
      play();
    }
  }, 1000);



}






function creatSession(event) {
  event.preventDefault();
  var clickedButton = event.currentTarget;
  var sessionUrl = "/sessions";
  fetch(sessionUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  })
    .then(function (resp) {
      return resp.json();
    })
    // Convert data to json
    .then(function (data) {

      console.log(data);
      hashdata = data;

    });

  clickedButton.classList.add("start-form");
  // debugger;
  playersForm.classList.remove("players-form");

}
startGame.addEventListener("click", creatGame);
function creatGame(event) {

  
  var player1Name = document.querySelector("#player1").value;
  var player2Name = document.querySelector("#player2").value;
  event.preventDefault();
  var playerNames = {
    player1: `${player1Name}`,
    player2: `${player2Name}`
  };
  if (player1Name != player2Name && player1Name != "" && player2Name != "") {
    const sessionId = hashdata["session"].id;
    var sendData = `/sessions/${sessionId}/games`;
    fetch(sendData, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(playerNames)
    })
      .then(function (resp) { return resp.json(); }) // Convert data to json
      .then(function (data) {
        hashdata = data; console.log(data);
        playersForm.classList.add("players-form");
              
      });
    game();
  }
  else alert("name is invalid");
  event.preventDefault();
}




var elapsedTime = 0;


function logKey(x) {



  //  var cells = racerTable.getElementsByTagName('td');
  var player = racerTable.getElementsByClassName("active");


  if (x.code === "KeyP") {
    updatePlayerPosition(player[0], players[0]);
  }
  else if (x.code === "KeyQ") {
    updatePlayerPosition(player[1], players[1]);

  }


}


function updatePlayerPosition(player, playerDetils) {

  // debugger;

  player.classList.remove("active");
  player.nextElementSibling.classList.add("active");
  elapsedTime += 1;
  if (player.parentElement.lastElementChild.className === "active") winner(playerDetils);
   

}

function winner( playerDetils) {
  // debugger
  alert("PLAYER " + playerDetils["name"] + " WON!");
  var winnerDetails = {
    "winner": `${playerDetils["id"]}`,
    "elapsed_time": `${elapsedTime}`
  };

  var winnerUrl = `/games/${hashdata["game"]["id"]}/finish`;

  fetch(winnerUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(winnerDetails)
  })
    .then(function (resp) { return resp.json(); }) // Convert data to json
    .then(function (data) {
      hashdata = data; console.log(data);

     
      scoreBoard();

    });

}

function scoreBoard() {
  // debugger;

  var resultUrl = `/games/${hashdata["game"]["id"]}/results`;

  fetch(resultUrl, {
    method: "GET",
    headers: {"Content-Type": "application/json" }
  })
    .then(function (resp) { return resp.json(); }) // Convert data to json
    .then(function (data) {
      hashdata = data; console.log(data); 

      document.getElementById("countdown").classList.add("start-form");
      boardGame.classList.add("game-table");
      score.classList.remove("start-form");
      document.getElementById("winner_name").innerHTML = "winner name " + data["winner"];
      document.getElementById("time_taken").innerHTML = "Take " + data["elapsed_time"] + " Sec";
      document.getElementById("game_id").innerHTML = "Game Id " + data["session_id"];
    });


}
