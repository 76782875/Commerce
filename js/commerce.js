
$(function(){
	$(".head_bottomMiddle ul li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
	})
	// 首页3板块动效
	$(".indexPublic").mouseover(function(){
		$(this).animate({marginTop:0},100);
	})
	$(".indexPublic").mouseleave(function(){
		$(this).animate({marginTop:30},100);
	})
	// 关于我们时间列表
	$(".timeStart").css({"color":"#ff9800"})
	$(".timeList li").click(function(){
		$(this).css({"color":"#ff9800"}).siblings("li").css({"color":"#a7a8a9"})
		$(this).children("span").addClass("active")
		.parent("li").siblings("li").children("span").removeClass("active");
		var jiaobiao=$(this).index();
		$(".historyList").animate({scrollLeft:1028*jiaobiao+"px"},"fast");
		console.log(jiaobiao)
		if (jiaobiao>5)
			// console.log("11");
			$(".timeList").animate({scrollLeft:160*jiaobiao+"px"},"fast")
		if (jiaobiao<5) {
			$(".timeList").animate({scrollLeft:160*(jiaobiao-1)+"px"},"fast")
		}
	})
	// 详细介绍
	var wids=0;
	var liwids=0;
	$(".historyList .inner .particular").each(function(){
		wids+= parseInt($(this).width());//获取模块宽度并累加
	})
	$(".timeList ul li").each(function(){
		liwids+=parseInt($(this).width());//获取li宽度并累加
	})
	$(".historyList .inner").width(wids);
	$(".timeList ul").width(liwids);
	// 详细地址鼠标移入移出效果
	$(".address a").css({"display":"none"});
	$(".address").mouseenter(function(){
		$(this).children("a").css({
			"display":"block"
		})
	})
	$(".address").mouseleave(function(){
		$(this).children("a").css({
			"display":"none"
		})
	})
})
