function genResponse(msg) {
	var chats = $(".chats");
	var response = "";

	// key words
	var greets = ["hello", "hi", "sup"];
	var questions = ["whats", "what's", "what", "wat", "wut", "y", "how", "is", "who", "?"];
	var youAre = ["your", "you are", "youre", "ur", "u r", "you're"];
	
	// multiple responses
	var nameRequestedResponses = ["My name is Aurum", "My name's Aurum", "Aurum", "I'm Aurum", "I am Aurum", "Aurum, whats yours?", "Aurum, wby?", "Aurum, wby?"];
	var youAreResponses = ["Ok", "Nice one", "Sweet", "So is your mum", "Cool", "No, you are", "Ok. Now what can I do for you?", "Thanks"]
	
	// check for greet
	for(var i = 0; i < greets.length; i++){
		if(msg == greets[i]){
			response = "Sappening";
		}
	}
	
	// check for question
	for(var i = 0; i < questions.length; i++){
		if(msg.indexOf(questions[i])!=-1){
			response = "Why don't you Google it";
		}
	}
	
	// check for youAre
	for(var i = 0; i < youAre.length; i++){
		if(msg.indexOf(youAre[i])!=-1){
			response = youAreResponses[Math.floor(Math.random() * youAreResponses.length)];
		}
	}
	
	// asked for name
	if(msg.indexOf("your name")!=-1){
		response = nameRequestedResponses[Math.floor(Math.random() * nameRequestedResponses.length)];
	}
	
	// create response
	if(response != ""){
		chats.append("<br><p class=\"from_chat\">" + response + "</p>");
	} else {
		chats.append("<br><p class=\"from_chat\">Cool</p>");
	}
}