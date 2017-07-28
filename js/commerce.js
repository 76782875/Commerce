
$(function(){
	$(".head_bottomMiddle ul li").on('click',function(){
		$(this).addClass("active").siblings("li").removeClass("active");
	}).end();
	// 首页3板块动效
	$(".indexPublic").on('mouseover',function(){
		$(this).animate({marginTop:0},100);
	}).end();
	$('.indexPublic').on('mouseleave',function(){
		$(this).animate({marginTop:30},100);
	}).end();
	// 关于我们时间列表
	$('.timeStart').css({'color':'#ff9800'})
	 var isClick = false;
	$('.timeList li').on('click',function(){
		$(this).css({"color":"#ff9800"}).siblings("li").css({"color":"#a7a8a9"})
		$(this).children("span").addClass("active")
		.parent("li").siblings("li").children("span").removeClass("active");
		var jiaobiao=$(this).index();
		$(".historyList").animate({scrollLeft:1028*jiaobiao+"px"},"fast");

		if (isClick = true){
			// console.log("11");
			$(".timeList").animate({scrollLeft:160*jiaobiao+"px"},"fast")}
		else{
			$(".timeList").animate({scrollLeft:160*(jiaobiao-1)+"px"},"fast")
		}
	}).end();
	// 详细介绍
	var wids=0,
		liwids=0;
	$('.historyList .inner .particular').each(function(){
		wids+= parseInt($(this).width());//获取模块宽度并累加
	}).end();
	$('.timeList ul li').each(function(){
		liwids+=parseInt($(this).width());//获取li宽度并累加
	}).end();
	$('.historyList .inner').width(wids);
	$('.timeList ul').width(liwids);
	// 详细地址鼠标移入移出效果
	$('.address a').css({'display':'none'});
	$('.address').on('mouseenter',function(){
		$(this).children('a').css({
			'display':'block'
		})
	}).end();
	$('.address').on('mouseleave',function(){
		$(this).children('a').css({
			'display':'none'
		})
	}).end();
	// 业务详解
	$('.businessL ul li').on('click',function(){
		$(this).addClass("active").siblings("li").removeClass("active");
	}).end();
	// 表格
	$('.tableList table tr:odd').css({'background':'#f8f8f8','color':'#0a8ac7'});
	// 分页开始
	$('.lawExpL .tab span').on('click',function(){
		$(this).addClass("active").siblings('span').removeClass("active");
		var inoff=$(this).index();
		$(".lawExperience .lawExpL .lawshow").animate({scrollLeft:510*inoff+"px"},"fast");
	}).end();
	// 职业机会
	$(".careerBnav li").on('mouseover',function(){
		var careerBnavs=$(this).index();
		console.log(careerBnavs);
	 	$(".careerBaltShow").eq(careerBnavs).attr("id","careerBaltShow").siblings(".careerBaltShow").removeAttr("id");
	}).end();


// $(function(){
// var isClick = false;
// $('#test').click(function(){isClick = true;});
// $('#show').click(function(){alert(isClick);})
// })
/*jcm*/
})
