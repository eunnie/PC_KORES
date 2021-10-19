// menu_icon
$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$('#nav-icon3').toggleClass('open');
	});
});
// slide
$(function(){
    var menu = document.querySelector(".menu"),
        toggle = document.querySelector("#nav-icon3");

    function toggleToggle() {
    toggle.classList.toggle("menu-open");
    };

    function toggleMenu() {
    menu.classList.toggle("active");
    };

    toggle.addEventListener("click", toggleToggle, false);
    toggle.addEventListener("click", toggleMenu, false);
});