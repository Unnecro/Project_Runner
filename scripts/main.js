
/************************************/
/** VARIABLES GENERALES DEL JUEGO **/
/**********************************/

var x;
var y;

var canvas;
var ctx;
var FPS;

var XposGround;
var moveXposGround;
var moveXposGroundPx;

var XposMountains;
var moveXposMountains;
var moveXposMountainsPx;

var player_height;
var bottomSpace;
var player_pos_default;
var player;
var playerFrameCounter = 0;

/** Físicas de salto **/
var velocityY = 0.0;
var gravity = 0.7;
var onGround = false;
var doubleJump = false;

//Tamaño absoluto (pixel perfect)
x = 840;
y = x / 2.5;

/** Selecciona el elemento 'canvas' mediante su ID.
 *  Asigna sus atributos 'width' y 'height'.
 */
canvas = document.getElementById("canvas");
canvas.setAttribute("width", x);
canvas.setAttribute("height", y);

/** Asigna el contexto 2D del canvas a 'ctx' */
ctx = canvas.getContext("2d");

/** Frames per Second a los que se mueve el juego */
FPS = 60;

/** MIRAR */
obstacleHeight = Math.random();
obstacleWidth = Math.random();
obstacle = {
}

/** Variable JSON que contiene los valores
 *  de los botones utilizados en el juego
 */
var buttons = {};


/*************************/
/** FUNCIONES DEL JUEGO */
/***********************/

/** PROVISIONAL, PRUEBAS DE COLISIONES - MOVER JUGADOR*/
/* var centinela = true;
function movePlayer(){
	if(centinela){
		player.y -= 10;
		if(player.y <= 10){
			centinela = false;
			player.state = 1;
		}
	}
	else{
		player.y += 10;
		if(player.y >= canvas.height - 120)
			centinela = true;
	}
}
*/






/*
function interact(elem, eventName, func){

	if(elem.addEventListener)
		elem.addEventListener(eventName, func, false);
	else if(elem.attachEvent)
		elem.attachEvent(eventName, func);
}

function keyEvents(){
	interact(canvas, "mousedown", function(e){
		buttons[e.keyCode] = true;
		console.log(e.button);
	});
	interact(canvas, "mouseup", function(e){
		buttons[e.keyCode] = false;
	});
}
*/



/** Conjunto de funciones a ejecutar */
/*
canvas.onmousedown = function(e){
		buttons[e.button] = true;
		console.log(e);
		return false;
}

canvas.onmouseup = function(e){
	console.log("asd");
	buttons[e.button] = false;
}
*/

//mirar bien!!!
document.onkeypress = function(e){

	switch(e.keyCode){
		case 87:
			case 119: setPlayerState(2);// buttons['W'] = true;
		break;

		// case 68:
		// 	case 100: setPlayerState(4);
		// break;
	}
}

document.onkeydown = function(e){
	switch(e.keyCode){
		case 87:
			case 119: setPlayerState(2);
		break;
		case 83:
			case 115: setPlayerState(3); //S
		break;
	}
}


document.onkeyup = function(e){
	switch(e.keyCode){
		case 83:
			case 115: setPlayerState(1); //S
		break;
	}
}