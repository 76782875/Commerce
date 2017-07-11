 var wid =document.documentElement.clientWidth;
	var scale = wid/750;
	document.body.style.zoom = scale;
	window.onresize = function(){
	var wid =document.documentElement.clientWidth;
	var scale = wid/750;
	document.body.style.zoom = scale;
  }
$(function(){
	function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    if (bIsIpad){
        $('.aboutUS').css({'display':'none'});
    }else{
    	$('.aboutUS').css({'display':'ininline-block'});

    }
}
browserRedirect();
})