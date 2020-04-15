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
