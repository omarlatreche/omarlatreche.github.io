$(document).ready(function(){
	if($(window).width() > 600){
		$('body').empty();
		$('body').append('<div class="mobile_only">\
						 	<h1>:-(</h1>\
						  	<p>Unfortunately the desktop version of this website is under construction.</p>\
						  	<p>Try viewing it on your smartphone.</p>\
						  </div>');
	}
	$('#getstarted').click(function(){
		$('html,body').animate({
			scrollTop: $('#1').offset().top},'slow');
	})
});