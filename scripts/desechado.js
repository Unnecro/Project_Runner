/**
 *	Snippet que permite obtener el
 *  ancho y alto de la ventana del
 *	navegador del usuario.
 */
var w = window;
var d = document;
var e = d.documentElement;
var g = d.getElementsByTagName('body')[0];
var x = w.innerWidth||e.clientWidth||g.clientWidth;
var y = w.innerHeight||e.clientHeight||g.clientHeight;
