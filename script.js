$(document).ready(function(){
	// Initiate draggable windows
	$(function(){
		$(".window").draggable({
			cancel:".window-body"
		});
	});
	
	var windows = ["welcome","projects","art","contact"];
	
	function bringWindowToFront(windowName){
		for(var i = 0; i < windows.length; i++) {
			if(windows[i] != windowName){
				$("#" + windows[i]).css("z-index","0");
			}
			if(windows[i] == windowName){
				$("#" + windows[i]).css("z-index","1");
			}
		}
	}
	
	function minimise(windowName){
		$("#" + windowName).css("display","none");
		$("#" + windowName + "-app-item").addClass("minimised");
		$("#" + windowName + "-app-item").removeClass("focused");
	}
	
	function openApp(windowName){
		$("#" + windowName).css("display","block");
		$("#" + windowName + "-app-item").removeClass("minimised");
		bringWindowToFront(windowName);
	}
	
	function addFocus(windowName){
		for(var i = 0; i < windows.length; i++) {
			if(windows[i] != windowName){
				$("#" + windows[i] + "-app-item").removeClass("focused");
			}
			if(windows[i] == windowName){
				$("#" + windows[i] + "-app-item").addClass("focused");
			}
		}
	}
	
	// Minimise click handelers
	$("#welcome-minimise").click(function(){
		minimise("welcome");
	});
	$("#projects-minimise").click(function(){
		minimise("projects");
	});
	$("#art-minimise").click(function(){
		minimise("art");
	});
	$("#contact-minimise").click(function(){
		minimise("contact");
	});
	
	// App icon click handelers
	$("#welcome-app-item").click(function(){
		openApp("welcome");
		addFocus("welcome");
	});
	$("#projects-app-item").click(function(){
		openApp("projects");
		addFocus("projects");
	});
	$("#art-app-item").click(function(){
		openApp("art");
		addFocus("art");
	});
	$("#contact-app-item").click(function(){
		openApp("contact");
		addFocus("contact");
	});
	
	// Window click handelers
	$("#welcome").click(function(){
		bringWindowToFront("welcome");
	});
	$("#projects").click(function(){
		bringWindowToFront("projects");
	});
	$("#art").click(function(){
		bringWindowToFront("art");
	});
	$("#contact").click(function(){
		bringWindowToFront("contact");
	});
	
	// Change focus handelers
	$("#welcome-header, #welcome-body").click(function(){
		addFocus("welcome");
	});
	$("#projects-header, #projects-body").click(function(){
		addFocus("projects");
	});
	$("#art-header, #art-body").click(function(){
		addFocus("art");
	});
	$("#contact-header, #contact-body").click(function(){
		addFocus("contact");
	});
});
