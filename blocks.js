// define canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// define block size and colors
const blockSize = 20;
const colors = [
  "#FF0000", // red
  "#00FF00", // green
  "#0000FF", // blue
  "#FFFF00", // yellow
  "#FF00FF", // magenta
  "#00FFFF", // cyan
  "#FFFFFF", // white
];

// define game state
let blocks = [];

// add event listener for arrow keys
document.addEventListener("keydown", handleKeyPress);

// add event listener for animate button
const animateButton = document.getElementById("animateButton");
animateButton.addEventListener("click", animateGame);

// create initial game board
createBoard();

// function to create initial game board
function createBoard() {
  for (let i = 0; i < canvas.width / blockSize; i++) {
    let row = [];
    for (let j = 0; j < canvas.height / blockSize; j++) {
      row.push(Math.floor(Math.random() * colors.length));
    }
    blocks.push(row);
  }
  drawBlocks();
}

// function to draw all blocks on canvas
function drawBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    for (let j = 0; j < blocks[i].length; j++) {
      ctx.fillStyle = colors[blocks[i][j]];
      ctx.fillRect(
        j * blockSize,
        i * blockSize,
        blockSize,
        blockSize
      );
    }
  }
}

// function to handle arrow key presses
function handleKeyPress(event) {
  if (event.code === "ArrowUp") {
    console.log("up arrow pressed");
    // move block up
  } else if (event.code === "ArrowDown") {
    console.log("down arrow pressed");
    // move block down
  } else if (event.code === "ArrowLeft") {
    console.log("left arrow pressed");
    // move block left
  } else if (event.code === "ArrowRight") {
    console.log("right arrow pressed");
    // move block right
  } else if (event.code === "Backspace") {
    console.log("backspace pressed");
    // remove block at current position
    const x = Math.floor(mouseX / blockSize);
    const y = Math.floor(mouseY / blockSize);
    blocks[y][x] = -1;
    drawBlocks();
  }
}

// function to animate game
function animateGame() {
  // animate retro pixel rain
  // draw smiley face
  // wink
  // animate retro pixel rain again
  // reset game
}