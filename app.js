let defuserscore = 0;
let defcompscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randchoice = Math.floor(Math.random() * 3);
  return options[randchoice];
};

const draw = () => {
  console.log("draw");
};

const playgame = (choiceid) => {
  console.log("User choice =", choiceid);
  const compchoice = gencompchoice();
  console.log("Comp Choice =", compchoice);

  const loosereplies = () => {
    const replies = [
      `Skill Issue LOL, The computer picked ${compchoice}`,
      `Boooooooooo, The computer picked ${compchoice}`,
      `How can you loose to a computer mate? The computer picked ${compchoice} `,
    ];
    const randomreplies = Math.floor(Math.random() * 3);
    return replies[randomreplies];
  };

  const winreplies = () => {
    const replies = [
      `LESS GO YOU WON!!!, The computer picked ${compchoice}`,
      `AMAZING YOU WON!, The computer picked ${compchoice}`,
      `YOU ARE PRO!, The computer picked ${compchoice}`,
    ];
    const randomreplies = Math.floor(Math.random() * 3);
    return replies[randomreplies];
  };

  const showWinner = (userwin) => {
    if (userwin) {
      console.log("Won");
      msg.innerHTML = winreplies();
      defuserscore++;
      userScorePara.innerHTML = defuserscore;
    } else {
      msg.innerHTML = loosereplies();
      defcompscore++;
      compScorePara.innerHTML = defcompscore;
    }
  };

  if (choiceid === compchoice) {
    draw();
    msg.innerHTML = `Its a draw, You both picked ${compchoice}`;
  } else {
    let userwin = true;
    if (choiceid === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (choiceid === "paper") {
      userwin = compchoice === "scissors" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showWinner(userwin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceid = choice.getAttribute("id");
    console.log("Choice was clicked", choiceid);
    playgame(choiceid);
  });
});
