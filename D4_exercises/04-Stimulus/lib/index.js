// Your code!
import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));



// const button = document.querySelector("#clickme");
// const sound = new Audio("treasure.mp3");

// button.addEventListener("click", (event) => {
//   const clickedButton = event.currentTarget;
//   clickedButton.setAttribute("disabled", "");
//   clickedButton.innerText = "Bingo!";
//   sound.addEventListener("ended", () => {
//     clickedButton.removeAttribute("disabled");
//     clickedButton.innerText = "Click me!";
//   });
//   sound.play();
// });


