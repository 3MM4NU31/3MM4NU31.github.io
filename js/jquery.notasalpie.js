$(document).ready(function () {
	jQuery("<div/>", 
	{
		id: "empty_div", css: 
		{
			display: "none"
		}
	}).appendTo("body");
	
	jQuery("<div/>", 
	{
		id: "floater",
		mouseenter: function(){
			floater=$("#floater");
			floater.stop(true, true).animate({opacity: "show"});
		},
		mouseleave: function(){
			$("#floater").delay(100).animate({opacity: "hide"}, "fast", function(){
				$("#empty_div").append($("#floater"))
			});
		}
	}
	).appendTo("#empty_div");
	
	jQuery("<img/>", 
	{
		id: "imgiconnotapie",
		src: "iconnotaspie.gif",
		className: "iconnotapie"
	}
	).appendTo("#floater");
	
	jQuery("<div/>", 
	{
		id: "floater_inside"
	}
	).appendTo("#floater");
	
	$("a.nota").bind("click",function(e){
		e.preventDefault();
	});
	
	$("a.nota").mouseenter(function(e) {
		var index = $("a.nota").index(this);
		iconnotapie=$("#imgiconnotapie");
		var floater=$("#floater");
		var floater_inside=$("#floater_inside");
		
		floater_inside
			.empty()
			.append($("p.anotacion").eq(index).html());
		$(this).after(floater);
		floater.stop(true, true).animate({opacity: "show"}, "slow");
		
	});
	$("a.nota").mouseleave(function(e) {
		var floater=$("#floater");
		floater.delay(100).animate({opacity: "hide"}, "fast", function(){
			$("#empty_div").append($("#floater"))
		});
	});
});
