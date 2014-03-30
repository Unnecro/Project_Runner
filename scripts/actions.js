/** Función que detecta las colisiones
 *  de los obstáculos contra el jugador.
 *  Su funcion es reasignar el mismo valor
 *  en cada iteración (si existe colision).
 */
 var count = 1;
function collisions(obstacle){
	if(player.state != 3 && obstacle.x == (player.x + player.width) - 60 || obstacle.x == (player.x + player.width) - 98){
		if((player.state != 3 && obstacle.y - obstacle.height <= player.y + player.height) || (player.state == 3 && player.y < obstacle.y)){//if(obstacle.y - obstacle.height <= player.y + player.height){
			count++;
			return true;
		}
		else{
			obstacle.x++;
			obstacle.move = true;
			return false;
		}
	}
}

function setPlayerState(action){
	player.state = action;
}

// function checkEvents(){
// 	switch(player.state){
// 		case 1: break;
// 		case 2:
// 	}
// 	if(buttons['D']){
// 			player.state = 4; //ATTACK
// 			return player.state;
// 		}
// 		else if(buttons['W']){
// 			player.state = 2; //JUMP
// 			centinela_jump = true;
// 			return player.state;
// 		}
// 		else if (buttons['S']){
// 			player.state = 3; //CROUCH
// 			return player.state;
// 		}
// 		player.state = 1;

// 		return player.state;
// }



var jumping = 0;
var player_width_default = player.width;
var player_height_default = player.height;
var player_y_default = player.y;
function performEvents(){
	switch(player.state){
		case 1: run();
			break;
		case 2:
			if(onGround){
				onGround = false;
				jump();
			}
			break;
		case 3:
			crouch();
			break;
		case 4: attack();
			break;
	}
}
	// /* JUMP */
	// if(centinela_jump){
	// 	if(ascention == false){
	// 		console.log("Saltar!");
	// 		ascention = true;
	// 		jump();
	// 	}
	// }
	// /* CROUCH */
	// else if(player.state == 3){
	// 	console.log("Agacharse!");
	// }
	// /* ATTACK */
	// else if(player.state == 4){
	// 	console.log("Atacar!!!");
	// }
	// /* RUN */
	// else{

	// }

function posDefault(){
	if(player.y < canvas.height){
		player.y += 15;
		if(player.y >= canvas.height){
			return true;
		}
	}
	return false;
}

/** Acción de salto del jugador.*/
function jump(){
	player.width = 108;
	player.height = player_height;
		velocityY = -12.0;
		onGround = false;
}

function run(){
	player.width = 108;
	player.height = player_height;
}

function crouch(){
	player.width = 146;
	player.height = 80;
	player.y = canvas.height - player.height;

}

function attack(){

}

//function jump(){
	// console.log(ascention);
	// if(ascention){
	// 	player.y-=15;
	// 	if(player.y <= 0){
	// 		ascention = false;
	// 		descention = true;
	// 	}
	// }
	// else if(descention){
	// 	if(player.y <= canvas.height){
	// 		player.state = 1;
	// 		player.y += 15;
	// 	}
	// 	else{
	// 		descention = false;
	// 		centinela_jump = false;
	// 	}
// 	// }
// }

// function crouch(){
// 	player.y+= 20;
// 	player.width = player_width_default * 2;
// 	player.height = player_height_default / 2;
// 	player.y = player_y_default +  player.height;
// }

// function attack(){

// }