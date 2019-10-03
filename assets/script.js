$(document).ready(function (){
	$("body").css("display","none");
	$("body").fadeIn(500);
	var pageOpen = false;

	$(".menu").mouseenter(function(){
		if(pageOpen == false){
			$(".menu li").css("width", "17.5%");
		}
	});
	$(".menu").mouseleave(function(){
		if(pageOpen == false){
			$(".menu li").css("width", "20%");
		}
	});
	$("#art").click(function(){
		if(pageOpen == false){
			openPage("#art");
		}
	});
	$("#apps").click(function(){
		if(pageOpen == false){
			openPage("#apps");
		}
	});
	$("#aurum").click(function(){
		if(pageOpen == false){
			openPage("#aurum");
		}
	});
	$("#about").click(function(){
		if(pageOpen == false){
			openPage("#about");
		}
	});
	$("#contact").click(function(){
		if(pageOpen == false){
			openPage("#contact");
		}
	});
	function openPage(page_id){
		pageOpen = true;
		$(page_id).css("width", "30%");
		$(".menu").css("height","100px");
		$(".menu li").css("height", "100px");
		$(".menu li").css("line-height", "100px");
		$(".menu").css("opacity","0");
		setTimeout(function(){
			$(page_id).removeClass("not_open");
			$(page_id).addClass("current_page");
			$(page_id).css("width","calc(100vw - 100px)");
			$(".menu").prepend('<li class="back"><i class="fas fa-arrow-left"></i></li>');
			$(".back").click(function(){
				$("body").fadeOut(500);
				location.reload();
			});
			setTimeout(function(){
				if(page_id == "#art"){
					$("#apps").css("display","none");
					$("#aurum").css("display","none");
					$("#about").css("display","none");
					$("#contact").css("display","none");
					$("#art_page").css("display","block");
					$("body").addClass("art_page");
					$(".back").css("background","#58C8B7");
				} else if(page_id == "#apps"){
					$("#art").css("display","none");
					$("#aurum").css("display","none");
					$("#about").css("display","none");
					$("#contact").css("display","none");
					$("body").addClass("apps_page");
					$(".back").css("background","#D7FEC7");
				} else if(page_id == "#aurum"){
					$("#art").css("display","none");
					$("#apps").css("display","none");
					$("#about").css("display","none");
					$("#contact").css("display","none");
					$("body").addClass("aurum_page");
					$(".back").css("background","#FF7A6B");
				} else if(page_id == "#about"){
					$("#art").css("display","none");
					$("#apps").css("display","none");
					$("#aurum").css("display","none");
					$("#contact").css("display","none");
					$("body").addClass("about_page");
					$(".back").css("background","#FFFFE7");
				} else if(page_id == "#contact"){
					$("#art").css("display","none");
					$("#apps").css("display","none");
					$("#aurum").css("display","none");
					$("#about").css("display","none");
					$("body").addClass("contact_page");
					$(".back").css("background","#00716C");
				}
				$(".menu").css("opacity","1");
			},500);
		},500);
	}
});