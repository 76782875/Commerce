
$(function(){
	// 新闻 资源 事件的动效
	$(".indexPublic").mouseover(function(){
		$(this).animate({marginTop:0},100);
	})
	$(".indexPublic").mouseleave(function(){
		$(this).animate({marginTop:30},100);
	})
})
