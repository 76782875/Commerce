 var wid =document.documentElement.clientWidth;
	var scale = wid/750;
	document.body.style.zoom = scale;
	window.onresize = function(){
	var wid =document.documentElement.clientWidth;
	var scale = wid/750;
	document.body.style.zoom = scale;
  }