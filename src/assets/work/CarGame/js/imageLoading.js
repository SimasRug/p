var carPic =  document.createElement("img");

//var trackPics = [];

//change
var roadPic =  document.createElement("img");
var wallPic =  document.createElement("img");
var goalPic =  document.createElement("img");
var treePic =  document.createElement("img");
var flagPic =  document.createElement("img");

//var trackPicks = [];



var picToLoad = 0;


function countLoadedImagesAndLaunchIfReady() {

			picToLoad --;
			console.log(picToLoad);

			if (picToLoad == 0) {
				imageLoadingDoneSoStartGame();
			}
		}

	

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload == countLoadedImagesAndLaunchIfReady();
	imgVar.src = "images/"+fileName;
}	


function loadImageForTrackCode(trackCode, fileName){ 
	trackPics[trackCode] = document.createElement("img");
	beginLoadingImage(trackPics[trackCode], fileName);

}

function loadImages() {

	var imageList = [
	{varName: carPic, theFile: "player1car.png"},
	{varName: roadPic, theFile: "track_Road.png"},
	{varName: wallPic, theFile: "track_Wall.png"},
	{varName: goalPic, theFile: "track_Goal.png"},
	{varName: treePic, theFile: "track_Tree.png"},
	{varName: flagPic, theFile: "track_Flag.png"}];
	
	// var imageList = [
	// {varName: carPic, theFile: "player1car.png"},

	// {trackType: TRACK_ROAD, theFile: "track_Road.png"},
	// {trackType: TRACK_WALL, theFile: "track_Wall.png"},
	// {trackType: TRACK_GOAL, theFile: "track_Goal.png"},
	// {trackType: TRACK_TREE, theFile: "track_Tree.png"},
	// {trackType: TRACK_FLAG, theFile: "track_Flag.png"}];

 





 	picToLoad = imageList.length;
 	
	for(var i=0; i<imageList.length; i++) {

		beginLoadingImage(imageList[i].varName, imageList[i].theFile);

	}	
	// for(var i=0; i<imageList.length; i++) {
	// 	console.log(imageList[i].varName);
	// 	console.log(imageList[i].trackType);
	// 	if (imageList[i].varName != undefined) {

	// 	beginLoadingImage(imageList[i].varName, imageList[i].theFile);
	// 	} else {
	// 		loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
	// 	}

		
	// }	
		
}