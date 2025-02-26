$(document).ready(function(){
	$("#send").click(function(){
		var chats = $(".chats");
		var msg = $("#msg");
		if(msg.val() != ""){
			chats.append("<br><p class=\"to_chat\">" + msg.val() + "</p>");
			genResponse(msg.val().toLowerCase());
			msg.val("");
			
			// scroll to bottom
			$(".chat_cont").animate({
				scrollTop: $('.chat_cont').prop("scrollHeight")
			}, 1000);
		}
	});
	$("#msg").keypress(function(key){
		if(key.which == 13){ // enter key
			$("#send").click();
		}
	});
});