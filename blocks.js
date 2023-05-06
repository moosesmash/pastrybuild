// Initialize canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = 500;
canvas.height = 500;

// Set block size
const blockSize = 20;

// Set colors
const backgroundColor = "#000";
const blockColor = "#fff";

// Create game state
const gameState = {
  blocks: [],
  currentBlock: {
    x: 0,
    y: 0,
  },
};

// Function to draw the game
function draw() {
  // Clear canvas
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw blocks
  gameState.blocks.forEach((block) => {
    ctx.fillStyle = blockColor;
    ctx.fillRect(block.x, block.y, blockSize, blockSize);
  });

  // Draw current block
  ctx.fillStyle = blockColor;
  ctx.fillRect(
    gameState.currentBlock.x,
    gameState.currentBlock.y,
    blockSize,
    blockSize
  );
}

// Function to update the game
function update() {
  // Move current block down
  gameState.currentBlock.y += blockSize;

  // Check if current block collides with any existing blocks
  const collision = gameState.blocks.some((block) => {
    return (
      gameState.currentBlock.x === block.x &&
      gameState.currentBlock.y === block.y - blockSize
    );
  });

  // If there is a collision, add the current block to the blocks array and create a new current block at the top
  if (collision || gameState.currentBlock.y >= canvas.height) {
    gameState.blocks.push({
      x: gameState.currentBlock.x,
      y: gameState.currentBlock.y - blockSize,
    });
    gameState.currentBlock.x = Math.floor(Math.random() * canvas.width);
    gameState.currentBlock.y = 0;
  }
}

// Function to handle arrow key input
function handleInput(e) {
  switch (e.keyCode) {
    case 37:
      // Move left
      gameState.currentBlock.x -= blockSize;
      break;
    case 38:
      // Rotate block
      // Not implemented in this version of the game
      break;
    case 39:
      // Move right
      gameState.currentBlock.x += blockSize;
      break;
    case 40:
      // Move down
      gameState.currentBlock.y += blockSize;
      break;
    case 8:
      // Remove block at current position
      gameState.blocks = gameState.blocks.filter((block) => {
        return !(block.x === gameState.currentBlock.x && block.y === gameState.currentBlock.y);
      });
      break;
  }
}

// Add event listener for arrow key input
document.addEventListener("keydown", handleInput);

// Start game loop
setInterval(() => {
  update();
  draw();
}, 1000 / 60);
