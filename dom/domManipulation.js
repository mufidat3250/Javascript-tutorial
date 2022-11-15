// let box1 = document.getElementById("box-1");
// let box2 = document.getElementById("box-2");
// let box3 = document.getElementById("box-3");
// let box4 = document.getElementById("box-4");
// box1.onclick = () => {
//   console.log(" first box clicked");
// };
// box2.onclick = () => {
//   console.log("second box clicked");
// };
// box3.onclick = () => {
//   console.log("third box clicked");
// };
// box4.onclick = () => {
//   console.log("fourth box clicked");
// };

let squares = document.querySelectorAll(".square");
console.log(squares);
let button = document.getElementById("button");

let clickedSquare = {
  "box-1": 0,
  "box-2": 0,
  "box-3": 0,
  "box-4": 0,
};
squares.forEach((square, index) => {
  square.onclick = () => {
    clickedSquare[square.value] += 1;
    square.innerText = clickedSquare[square.value];
  };
});

button.onclick = () => {
  squares.forEach((square, index) => {
    square.innerText = "";
  });
};
