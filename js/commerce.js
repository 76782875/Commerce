
$(function(){
	/*轮播*/
	var bdwidth=$(window).width();
	if (bdwidth<1200) {
		var wid =document.documentElement.clientWidth;
			var scale = wid/1440;
			document.body.style.zoom = scale;
			window.onresize = function(){
			var wid =document.documentElement.clientWidth;
			var scale = wid/1440;
			document.body.style.zoom = scale;
		}
	}

	// 轮播结束
			$(".indexPublic").mouseover(function(){
				$(this).animate({marginTop:0},100);
			})
			$(".indexPublic").mouseleave(function(){
				$(this).animate({marginTop:30},100);
			})
})
