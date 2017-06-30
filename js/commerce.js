
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
		$(".historyList").animate({scrollLeft:1028*jiaobiao+"px"},"fast")
	})
	// 详细介绍
	var wids=0;
	$(".historyList .inner .particular").each(function(){
		wids+= parseInt($(this).width());//获取宽度并累加
	})
	$(".historyList .inner").width(wids);
	// 切换详情

})
