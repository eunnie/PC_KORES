$(function(){
    $('#skip-menu a').on('focus', function(){
    $(this).stop().animate({"top":0, "opacity":1});
    });
    $('#skip-menu a').on('click', function(){
        $(this).stop().animate({"top":"-30px", "opacity":0});
    });
    $('#skip-menu a').on('focusout', function(){
        $(this).stop().animate({"top":"-30px", "opacity":0});
    });
});
