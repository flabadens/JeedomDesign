/*
  Menu name : Bubble
  Author : geqr
  Website : www.ma-maison-intelligente.fr
  Tutorial : http://ma-maison-intelligente.fr/2020/03/ameliorer-son-design-jeedom-avec-un-menu-bubble/
	Origin : https://codepen.io/simgooder/pen/bVLjgM/
  Last Update : 20200331 - creation
 */
$( ".menu-toggle" ).click(function() {
	$(".menu-toggle").toggleClass('open');
  $(".menu-round").toggleClass('open');
	$(".menu-line").toggleClass('open');
});
