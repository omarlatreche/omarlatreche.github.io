$(document).ready(function(){
	$(function(){
		$(".window").draggable();
	});
	
	var windows = ["welcome","aurum"];
	
	function bringWindowToFront(windowName){
		for (var i = 0; i < windows.length; i++) {
			if(windows[i] != windowName){
				$("#" + windows[i]).css("z-index","0");
			}
			if(windows[i] == windowName){
				$("#" + windows[i]).css("z-index","1");
			}
		}
	}
	
	// Welcome functions
	$("#welcome-minimise").click(function(){
		var windowName = $(this).closest("div");
		windowName.css("display","none");
		//$(windowName.attr("id") + "-app-item").removeClass("focused");
	});
	$("#welcome-app-item").click(function(){
		var windowName = "welcome";
		$("#" + windowName).css("display","block");
		//$("#" + windowName + "-app-item").addClass("focused");
		bringToFront(windowName);
	});
	$("#welcome").click(function(){
		//$("#welcome-app-item").addClass("focused");
		//$("#test-app-item").removeClass("focused");
		bringWindowToFront("welcome");
	});
	
	// Aurum functions
	$("#aurum-minimise").click(function(){
		var windowName = $(this).closest("div");
		windowName.css("display","none");
		//$(windowName.attr("id") + "-app-item").removeClass("focused");
	});
	$("#aurum-app-item").click(function(){
		var windowName = "aurum";
		$("#" + windowName).css("display","block");
		//$("#" + windowName + "-app-item").addClass("focused");
		bringToFront(windowName);
	});
	$("#aurum").click(function(){
		//$("#welcome-app-item").addClass("focused");
		//$("#test-app-item").removeClass("focused");
		bringWindowToFront("aurum");
	});
});
