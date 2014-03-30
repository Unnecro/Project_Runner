/** Función encargada de dibujar el fondo del canvas */
function drawBackground(){
	ctx.drawImage(background, 0, 0, x, y);
}

/** Función encargada de dibujar el suelo
 *  en una nueva posición en cada frame.
 *  De esta manera da el efecto de que el jugador
 *  está avanzando.
 */
XposGround = 0;
moveXposGround = 0;
moveXposGroundPx = 10; //Numero de pixeles que se mueve el suelo
function drawGround(){
		XposGround = moveXposGround;

		for(var i = 0; i < groundArray.length; i++){
			ctx.drawImage(groundArray[i], XposGround, groundY);
			XposGround += 50;
		}

	if(moveXposGround % (moveXposGroundPx * (groundArray[0].width / moveXposGroundPx)) == 0){ // 5 = ancho de la imagen dividido entre el numero de pixeles que se desea que se mueva
				groundArray.push(groundArray[0]);
				groundArray.splice(0, 1);
				moveXposGround = 0;
	}

	moveXposGround -= moveXposGroundPx;
}

/** Función encargada de dibujar las montañas
 *  en una nueva posición en cada frame.
 *  De esta manera da el efecto de que el jugador
 *  está avanzando.
 */
XposMountains = 0;
moveXposMountains = 0;
moveXposMountainsPx = 2;
function drawMountains(){
	XposMountains = moveXposMountains;
	for(var i = 0; i < mountainsArray.length; i++){
		ctx.drawImage(mountainsArray[i], XposMountains, canvas.height - backmountains.height);
		XposMountains += backmountains.width;
	}

	if(moveXposMountains % (moveXposMountainsPx * (backmountains.width / moveXposMountainsPx)) == 0){
				mountainsArray.push(mountainsArray[0]);
				mountainsArray.splice(0, 1);
				moveXposMountains = 0;
	}

	moveXposMountains -= moveXposMountainsPx;
}

/** Movimiento del jugador. Realmente el jugador
 *  siempre está en la misma posición del eje X,
 *  excepto en el placaje, en el que avanza algunos
 *  píxeles.
 */
player_height = 142;
bottomSpace = 20;


//player_pos_default = canvas.height - player_height - bottomSpace;
player_pos_default = 180;
player = {
	state : 0, //Corriendo
	x: 12,
	y: player_pos_default,
	width: 108,
	height: player_height
	}
	var jumpFrame = 1;
function drawPlayer(){
	switch(player.state){
		case 1: ctx.drawImage(playerArray[playerFrameCounter], player.x, player.y);
						playerFrameCounter++;
						if(playerFrameCounter == 66){
							playerFrameCounter = 0;
						}
					break;
		case 2:
			if(Math.floor(velocityY) == 0){
				jumpFrame = 2;
			}
			switch(jumpFrame){
				case 1: ctx.drawImage(playerJumpAsc, player.x, player.y);
					break;
				case 2: ctx.drawImage(playerJumpDesc, player.x, player.y);
					break;
			}
			velocityY += gravity;
			player.y += velocityY;
			break;
		case 3:
				ctx.drawImage(playerCrouch, player.x, player.y);
					break;
		case 4:
					break;
	}
	if(player.y >= player_pos_default && player.state != 3){
		player.y = player_pos_default;
		onGround = true;
		player.state = 1;
		jumpFrame = 1;
		jumping = 0;
	}

	// ctx.fillStyle = "black";
	// ctx.fillRect(player.x, player.y, player.width, player.height);
}

var act;
var obstaclePosX = canvas.width;
function drawObstacles(){
	for(var i = 0; i < obstaclesArray.length; i++){
		act = obstaclesArray[i];
			ctx.fillRect(act.x, act.y - act.height, act.width, act.height);
				act.x -= moveXposGroundPx;
				if(collisions(obstaclesArray[i])){
					lives -= 1;
				}
		}
		if(obstaclesArray[0].x + obstaclesArray[0].width <= 0){
			// obstaclesArray[0].x = obstaclesArray[obstaclesSize - 1].x += 500;
			// obstaclesArray.push(obstaclesArray[0]);
			obstaclesArray.push(obstacle = {
			width : (Math.floor(Math.random() * 2)) * 100,
			height: (Math.floor(Math.random() * 2)) * 100,
			x : obstaclesSeparation - 1000,
			y : canvas.height - (Math.floor(Math.random() * 2)) * 100,
			move: true
		});
		//obstaclesSeparation += 500;
		if(obstaclesArray[obstaclesSize - 1].height < 50)
			obstaclesArray[obstaclesSize - 1].height = 50;
		if(obstaclesArray[obstaclesSize - 1].width < 50)
			obstaclesArray[obstaclesSize - 1].width = 50;

			obstaclesArray.splice(0, 1);
	}
}

function drawLives(){
	var livesXpos = 2;
	if(lives == 0){
		endGame();
	}
	else{
		for(var i = 0; i < lives; i++){
			ctx.drawImage(liveImg, livesXpos, 2);
			livesXpos += 50;
		}
		livesXpos = 50;
	}
}

function drawPoints(){
	ctx.font = "20px Arial";
	ctx.fillText("Puntos: " + points, canvas.width - 150, 20);
}


function endGame(){
	window.clearInterval(interval);
	ctx.fillStyle = "#EBEBEB";
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.font = "20px Arial";
	ctx.fillStyle = "#333";
	ctx.fillText("Game Over. You got " + points + " points.", (canvas.width / 2) - 150, 80);
	ctx.fillText("Click the canvas to play again", (canvas.width / 2) - 150, 120)
	ctx.drawImage(playerArray[1], (canvas.width / 2) - playerArray[1].width, (canvas.height / 2));
}