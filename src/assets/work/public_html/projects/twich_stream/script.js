var names = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var online = [];
var images = [];
var displayName = [];
var game = [];
var link =  [];
var linkToChannel = [];

for(var i=0; i<names.length; i++) {

	onlineStatus(names[i]);
	getUser(names[i]);
}


var myTimer = setInterval(function(){
	if (online.length == names.length && online.length == images.length && online.length == displayName.length && online.length == game.length && online.names == game.linkToChannel) {
		clearInterval(myTimer);
		for(var i=0; i<online.length; i++)
		{
			
			appendingStuff(online[i],images[i], displayName[i], game[i], linkToChannel[i]);
		}

	}
},1000);


function appendingStuff(status, images, name, game, link) {

	$("#forAppending").append('<div class="row '+ status+'"><a href="'+link+'" target="_blank"><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center images"><img src="'+images+'"></div><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center"><p>'+name+'</p></div><div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center"><p>'+game+'</p></div></a></div>');

}



function getUser(names) {
	var link = "https://wind-bow.hyperdev.space/twitch-api/channels/"+names;
	$.getJSON(link, function(jData){
		images.push(jData.logo);
		displayName.push(jData.display_name);
		 linkToChannel.push(jData.url);

	});
}



function onlineStatus(names) {
	var link = "https://wind-bow.hyperdev.space/twitch-api/streams/"+names;

	$.getJSON(link, function(jData){
		  // console.log(jData);
		if (jData.stream) {
			// console.log("online");
			online.push("online");
			game.push(jData.stream.game);
		} else {
			// console.log("offline");
			online.push("offline");
			game.push("Offline");
		}
	});
}


$('#seeOnline').on('click', function(){
	$('.online').fadeIn();
	$('.offline').fadeOut();
});
$('#seeOffline').on('click', function(){
	$('.offline').fadeIn();
	$('.online').fadeOut();
});
$('#seeAll').on('click', function(){
	$('.offline').fadeIn();
	$('.online').fadeIn();
});