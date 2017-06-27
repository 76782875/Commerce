
$(function(){
	/*轮播*/
	function carousel(){
		var bdwidth=$(window).width();
	$("#content .slider img").css({"width":bdwidth,"height":"auto"})
	var imghei=$("img").height();
	$("#content").css({"width":bdwidth,"height":imghei});
	$(".ad").css({"width":bdwidth,"height":imghei});
	$(".slider").width($(".slider li").length*bdwidth);
	$(".num").css({"left":"45%"})
	console.log($(".slider li").length*bdwidth);
		var len=$(".num > li").length;
		var index=0;
		var adtime;
		$(".num li").mouseover(function(){
			index=$(".num li").index(this);
			showimg(index);
		}).eq(0).mouseover();
		// 滑入停止动画 滑出开始动画
		$(".ad").hover(function(){
			clearInterval(adtime);
		},function(){
			adtime=setInterval(function(){
				showimg(index);
				index++;
				if (index==len) {index=0;}
			},4000)
		}).trigger("mouseleave");

		function showimg(index){
			   var setleft=$(".ad").width();
			$(".ad").stop(true,false).animate({scrollLeft:setleft*index},1500);

			$(".num li").removeClass("on")
			.eq(index).addClass("on");
		}
	}
	carousel();
	// 轮播结束
			$(".indexPublic").mouseover(function(){
				$(this).animate({marginTop:0},100);
			})
			$(".indexPublic").mouseleave(function(){
				$(this).animate({marginTop:30},100);
			})
})
