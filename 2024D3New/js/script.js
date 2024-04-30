$(function(){
    let now_index = 0;

    setInterval(() => {
        let next_index = (now_index+1) % 3;
        $(".slider").eq(now_index).fadeOut(2400);
        $(".slider").eq(next_index).fadeIn(2400).css("display","flex");
        now_index = next_index;
    }, 3000);
})

$(".menu > ul > li").on("mouseover", function(){
    $(".menu > ul > li > ul").stop().fadeIn();
    $(".background").stop().fadeIn();
})

$(".menu > ul > li").on("mouseout", function(){
    $(".menu > ul > li > ul").stop().fadeOut();
    $(".background").stop().fadeOut();
})

$(".tab ul li").on("click", function()
{
    $(this).addClass("on").siblings().removeClass("on");
    $(".board_content div").eq($(this).index()).show().siblings().hide();
})

//popup

$(".popup_open").on("click", function(){
    $(".popup").css("display", "flex");
})

$(".popup_close").on("click", function(){
    $(".popup").css("display", "none");
})