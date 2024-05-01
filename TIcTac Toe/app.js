let boxes = document.querySelectorAll(".box");

let turnO = true;
let winchances = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i <= winchances.length; i++) {

  if (winchances[i] === winchances[i]) {
    console.log('winner');
  }
  else{
    console.log('Loose');
  }
}

// const winpattern=()=>
//     for(let i = 0; i<=winchances.length; i++){
//         if(winchances===){

//         }

//     }

// }

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
  });
});
