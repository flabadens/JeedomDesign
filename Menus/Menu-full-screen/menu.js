/*
  Menu name : Full screen
  Author : geqr
  Website : www.ma-maison-intelligente.fr
  Tutorial : http://ma-maison-intelligente.fr/2020/03/ameliorer-son-design-jeedom-avec-un-menu-full-screen/
	Origin : https://codepen.io/breadz/pen/zrMRoo
  Last Update : 20200329 - creation
 */
 
$('.toggle-menu').click (function(){
  $(this).toggleClass('active');
  $('#menu').toggleClass('open');
});


$("#menu").click(function(event) {
  $target = $(event.target);
  if($target.closest('.main-nav').length == 0 &&
  $('#menu').hasClass('open')) {
    $("#menu").toggleClass('open');
	$(".toggle-menu").toggleClass('active');
  }
});

function closeMenu (){
	$("#menu").toggleClass('open');
	$(".toggle-menu").toggleClass('active');
};
