var current = 0;

$('.section3_item3_box li').click(function(){
    
    var img = $(this).children().attr("src");
    $('.section3_item2 img').attr("src",img);

    current = $(this).index();

    $(this).addClass("border");
    $(this).siblings().removeClass("border");
});

$('.section3_item3_box li').eq(current).click();