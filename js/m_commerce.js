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
//下拉列表
$(".pull_downList .list_headLine").on('click',function(){
     var List_x=  $(this).next('ol');
     var display =$(this).css('display');
     // if ($(this).is(":hidden")) {}
      List_x.show(500).siblings('ol').css({'display':'none'});
      $(this).children('span').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
      $(this).children('span').parent('li').siblings('li').children('span').addClass('glyphicon-chevron-right').removeClass('glyphicon-chevron-down')
})

})