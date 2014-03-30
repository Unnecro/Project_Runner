/** Array contenedor de los NOMBRES de las imagenes de la hierba */
var groundImgContainerArray = new Array();
groundImgContainerArray = [
	"images/ground/hierba1.png",
	"images/ground/hierba2.png",
	"images/ground/hierba3.png",
	"images/ground/hierba4.png",
	"images/ground/hierba5.png",
	"images/ground/hierba6.png",
	"images/ground/hierba7.png",
	"images/ground/hierba8.png"
];

var playerImgContainerArray = new Array();
for(var i = 1; i <= 66; i++){
	playerImgContainerArray[i] = "images/player/mini/Animacion" + (i < 10 ? '0' + i.toString() : i) + ".png";
}

/** Variable que contiene la imagen a utilizar de fondo del canvas */
var background = new Image();
background.src = "images/background1.png";

/** Variable que contiene la imagen a utilizar de montañas en movimiento */
var backmountains = new Image();
backmountains.src = "images/backmountains.png";

var playerJumpFrame = 0;
var playerJumpAsc = new Image();
playerJumpAsc.src = "images/player/mini/jumpAsc.png";
var playerJumpDesc = new Image();
playerJumpDesc.src = "images/player/mini/jumpDesc.png";

var playerCrouch = new Image();
playerCrouch.src = "images/player/mini/crouch.png";


/** Arrays que van a contener las imagenes de la hierba y las montañas */
var groundArray = new Array();
var mountainsArray = new Array();
var obstaclesArray = new Array();
var playerArray = new Array();

/** Con estas variables se definen las amplitudes de los arrays anteriores
 *  dividiendo el tamaño del canvas en partes de 50px y 740px respectivamente,
 *  que es el tamaño de cada imagen.
 */
var groundSize = (Math.ceil(x / 50)) + 1;
var mountainsSize = (Math.ceil(x / 740)) + 1;
var obstaclesSize = (Math.ceil(x / 200)) + 1;
var playerSize = 66; //Número de frames de la animación del corredor
/** Posicion en la que se coloca el suelo (hierba) */
var groundY = y - 30;

var lives = 3;
var liveImg = new Image();
liveImg.src = "images/player/mini/live.png";

var points = 0;
/****************/
/** FUNCIONES **/
/**************/

/** Primera función en ser llamada. Especifica
 *  el tamaño de 'groundArray' basandose en
 *  la variable 'groundSize' y va añadiendo
 *  en cada posición una imagen.
 */
function setGround(){
	var groundRandom;
	for(var i = 0; i < groundSize; i++){
	  groundRandom = Math.floor(Math.random() * 8);
		groundArray.push(new Image());
		groundArray[i].src = groundImgContainerArray[groundRandom];
	}
}

/** Especifica
 *  el tamaño de 'mountainArray' basandose en
 *  la variable 'mountainSize' y va añadiendo
 *  en cada posición una imagen.
 */
function setMountains(){
	backmountains.style.height = 300;
	for(var i = 0; i < mountainsSize; i++){
		mountainsArray.push(backmountains);
	}
}

/** Llamada una sola vez, para cargar la imagen
 *  de fondo del canvas e iniciar el bucle del juego
 *  con un setInterval();
 */
 var interval;
function load(){
	playerArray[playerArray.length - 1].onload = function(){
		ctx.drawImage(background, 0, 0, x, y);
			for(var i = 0; i < groundArray.length; i++){
				if(XposGround <= x){
					ctx.drawImage(groundArray[i], XposGround, groundY);
					if(i == groundArray.length)
						i = 0;
					XposGround += 50;
				}
			}
		interval = window.setInterval(game, 1000/FPS);

	};
}

function setPlayer(){
	for(var i = 0; i < playerSize; i++){
		playerArray.push(new Image());
		playerArray[i].src = playerImgContainerArray[i + 1];
	}
}

var obstaclesSeparation = canvas.width;
function setObstacles(){
	for(var i = 0; i < obstaclesSize; i++){
		obstaclesArray.push(obstacle = {
			width : (Math.floor(Math.random() * 2)) * 100,
			height: (Math.floor(Math.random() * 2)) * 100,
			x : obstaclesSeparation,
			y : canvas.height - (Math.floor(Math.random() * 2)) * 100,
			move: true
		});
		obstaclesSeparation += 500;
		if(obstaclesArray[i].height < 50)
			obstaclesArray[i].height = 50;
		if(obstaclesArray[i].width < 50)
			obstaclesArray[i].width = 50;
	}
}

