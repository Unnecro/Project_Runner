setGround();
setMountains();
setObstacles();
setPlayer();
load();
var asd = 0;
function game(){
	points += 1;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBackground();
	drawMountains();
	drawGround();
	drawObstacles();
	//movePlayer();
	//checkEvents();
	performEvents();
	drawPoints();
	drawPlayer();
	drawLives();
}