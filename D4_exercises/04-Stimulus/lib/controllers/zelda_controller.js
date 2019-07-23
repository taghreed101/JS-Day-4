import { Controller } from "stimulus";

export default class extends Controller {
static targets = [ "trigger" ];
  connect() {
    this.originalTriggerText = this.triggerTarget.innerText;
  }

    play() {
      console.log("Button clicked! TODO: play a sound");
      const sound = new Audio(this.data.get('sound'));
      sound.play();
      console.log(this.triggerTarget);
      this.triggerTarget.innerText = "Bingo!";
      this.triggerTarget.setAttribute('disabled', '');
      sound.addEventListener("ended", () => {
      this.triggerTarget.removeAttribute('disabled');
      this.triggerTarget.innerText = this.originalTriggerText;
    })
  }
}

//   import { Controller } from "stimulus";

// export default class extends Controller {
// static targets = [ "trigger" ];
//   connect() {
//     this.triggerTarget.innerText = this.originalTriggerText;
//   }

//     play() {
//       console.log("Button clicked! TODO: play a sound");
//       const sound = new Audio(this.data.get('sound'));
//       sound.play();
//       console.log(this.triggerTarget);
//       this.triggerTarget.innerText = "Bingo!";
//       this.triggerTarget.setAttribute('disabled', '');
//       sound.addEventListener("ended", () => {
//       this.triggerTarget.innerText = this.originalTriggerText;
//     })
//     }
// }
