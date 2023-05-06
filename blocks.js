const canvas = document.getElementById("canvas");
		const ctx = canvas.getContext("2d");

		const blockSize = 20;
		const rows = canvas.height / blockSize;
		const cols = canvas.width / blockSize;

		let blockColors = [];
		for (let i = 0; i < rows; i++) {
			blockColors[i] = [];
			for (let j = 0; j < cols; j++) {
				blockColors[i][j] = "#000";
			}
		}

		function drawBlock(x, y, color) {
			ctx.fillStyle = color;
			ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
			ctx.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize);
		}

		function draw() {
			for (let i = 0; i < rows; i++) {
				for (let j = 0; j < cols; j++) {
					drawBlock(j, i, blockColors[i][j]);
				}
			}
		}

		canvas.addEventListener("mousemove", function(e) {
			const x = Math.floor(e.offsetX / blockSize);
			const y = Math.floor(e.offsetY / blockSize);
			blockColors[y][x] = "#fff";
		});

		canvas.addEventListener("click", function(e) {
			const x = Math.floor(e.offsetX / blockSize);
			const y = Math.floor(e.offsetY / blockSize);
			blockColors[y][x] = "#fff";
		});

		document.addEventListener("keydown", function(e) {
			if (e.code === "Backspace") {
				const x = Math.floor(currentX);
				const y = Math.floor(currentY);
				blockColors[y][x] = "#000";
			}
		});

		let currentX = 0;
		let currentY = 0;
		document.addEventListener("keydown", function(e) {
			if (e.code === "ArrowLeft" && currentX > 0) {
				currentX--;
			} else if (e.code === "ArrowRight" && currentX < cols - 1) {
				currentX++;
			} else if (e.code === "ArrowUp" && currentY > 0) {
				currentY--;
			} else if (e.code === "ArrowDown" && currentY < rows - 1) {
				currentY++;
			}
		});

		function update() {
			drawBlock(Math.floor(currentX), Math.floor(currentY), "#fff");
		}

		function loop() {
			update();
			requestAnimationFrame(loop);
		}

		loop();
