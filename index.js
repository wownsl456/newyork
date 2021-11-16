$(".header_menu_box>li").hover(function(){
    $(this).find('.header_sub_menu').slideDown('fast');
},function(){
    $(this).find('.header_sub_menu').slideUp('fast');
});
