   $(function(){
    $(".sub").hide();
    $(".main li")
    .mouseenter(function(){ 
        $(this).children(".sub").stop().slideDown(300);})
    .mouseleave(function(){ 
        $(this).children(".sub").stop().slideUp(300);})
   });