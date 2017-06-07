var oldPositionTop;
var oldPositionLeft;
var droneCount = 0;
var attendedAccidents = 0;
var secondClick = 0;
var click = 0;
stats();
// --------------------CREATES DRONES-------------------

$("#clickedToCreate").click(function(){
	var tempDroneCount = $("#tempDroneCount").val();
	tempDroneCount = parseInt(tempDroneCount);
	
	$("#createDrones").fadeOut();

for(i=0; i<tempDroneCount; i++) {
	$("#droneBox").append('<div class="drone"></div>');
}
droneCount = tempDroneCount + droneCount;
stats();
});




// ------- SELECTING ACTIVE DRONE ------




$(document).on("click", ".sideMenu", function(e){
	e.stopPropagation();
});
$(document).on("click", ".drone", function(e){
	e.stopPropagation();
});
$(document).on("click", "#createDroneBox", function(e){
	e.stopPropagation();
});

$("body").on("click", ".drone", function(){
	

	
	$("#activeDrone").attr("id", "flyBack");


	$("#flyBack").animate({
		top: oldPositionTop,
		left: oldPositionLeft
	}, 2000, function(){
		$("#flyBack").removeAttr("style");
		$("#flyBack").appendTo("#droneBox");
		$("#flyBack").removeAttr("id");
	});
	$(this).attr("id", "activeDrone");

	var top = $(this).position().top;
	var left = $(this).position().left;
	oldPositionTop = top;
	oldPositionLeft = left;


	$(this).css({"top":top, "left":left});
	$(this).appendTo("body");

});


// ------ CLICK ON ACCIDENT, ANIMATE THE DRONE -------

$(".accident").click(function(){
	$(this).attr("id", "currentAccident");
	var AccPositionLeft = $(this).position().left;
	var AccPositionTop = $(this).position().top;

	$("#activeDrone").animate({
		top: AccPositionTop,
		left: AccPositionLeft

	}, 1500, function(){
		$("#currentAccident").remove();
		attendedAccidents++;
		stats();
	});
	

});


//-------------------------DELETE DRONES --------------------------------


var a = false;

$(document).on("click", "#delete", function(e){			
	e.stopPropagation();
	$("#delete").css({"color":"#F5AB35"});
	a= true
});

$(document).on("click", ".sideMenu", function(){	
	a= false
	$("#delete").css({"color":"white"});
});
$(document).on("click", "body", function(){	
	a= false
	$("#delete").css({"color":"white"});
});
$(document).on("click", ".drone", function(){
	if (a == true)
	{
		$(this).remove();
		droneCount--;
		stats();
	}
});


// 

//--------------------------------------------------------------------










$(document).click(function(){
	if(click>0)
	{
		$(".sideMenu").fadeOut();
		click = 0;
		


	}
	
});
$("#statsPannel").click(function(){
	click = 0;
	$(".sideMenu").fadeIn();
	$("#statistics").fadeIn();
	$("#droneMenu").css({"display":"none"});
	
	setTimeout(function(){ click++;  },10); // seting time out so that click function doesnt dectect click++ imideatly

});

$("#dronePannel").click(function(){
	click = 0;
	$(".sideMenu").fadeIn();
	$("#droneMenu").fadeIn();
	$("#statistics").css({"display":"none"});
	setTimeout(function(){ click++;  },10); // seting time out so that click function doesnt dectect click++ imideatly

});




$("#dronesPannel").click(function(){
	$("#createDrones").fadeIn();
	setTimeout(function(){ secondClick++;  },100);
});

$(document).click(function(){
if(secondClick>0) {
	$("#createDrones").fadeOut();
	secondClick = 0;
}
});







function stats()
{
	document.getElementById("droneCount").innerHTML = droneCount;
	document.getElementById("attendedAccidents").innerHTML = attendedAccidents;
}














