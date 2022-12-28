// Open and close sidebar

$(document).ready(function(){
	$("#menu-icon").click(function(){
		$(".sidebar").animate({"right":"0px"}, "fast");
		$(".overlay").fadeIn("fast");
	});
	
	$("#close-icon").click(function(){
		$(".sidebar").animate({"right":"-100%"}, "fast");
		$(".overlay").fadeOut("fast");
	});
	
});