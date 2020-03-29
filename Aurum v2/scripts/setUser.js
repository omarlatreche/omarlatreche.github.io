$(document).ready(function(){
	function titleCase(str){
		str = str.toLowerCase();
		str = str.split(" ");
		for(var i = 0; i < str.length; i++){
			str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
			return str.join(" ");
		}
	}
	$("#set_username").click(function(){
		var chats = $(".chats");
		var msg = $("#msg");
		var send = $("#send");
		var userid = titleCase($("#usrid").val());
		if(userid != ""){
			$("#usrid").removeClass("invalid");
			chats.append("<br><p class=\"from_chat\">Wys " + userid + "</p>");
			msg.prop("disabled", false);
			send.prop("disabled", false);
			msg.focus();
		} else {
			$("#usrid").addClass("invalid");
		}
	});
	$("#usrid").keypress(function(key){
		if(key.which == 13){ // enter key
			$("#set_username").click();
		}
	});
});