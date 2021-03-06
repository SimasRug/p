



	const TRACK_GAP = 2;
	const TRACK_W=40;
	const TRACK_H=40;
	const TRACK_COLS = 20;
	const TRACK_ROWS = 15;


	

	var trackGrid = [4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,
					 4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
					 4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
					 1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,
					 1,0,0,0,1,1,1,4,4,4,4,4,1,1,1,1,1,0,0,1,
					 1,0,0,1,1,0,0,1,4,4,4,1,0,0,0,0,1,0,0,1,
					 1,0,0,1,0,0,0,0,1,4,1,0,0,0,0,0,1,0,0,1,
					 1,0,0,1,0,0,0,0,0,1,1,0,0,5,0,0,1,0,0,1,
					 1,0,0,1,0,0,5,0,0,0,1,0,0,1,0,0,1,0,0,1,
					 1,0,0,1,0,0,1,1,0,0,5,0,0,1,0,0,1,0,0,1,
					 1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,5,0,0,1,
					 1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,
					 1,0,3,0,0,0,1,4,1,0,0,0,1,1,0,0,0,0,0,1,
					 1,0,3,0,2,2,1,4,4,1,1,1,1,4,1,0,0,0,1,1,
					 1,1,1,1,1,1,1,4,4,4,4,4,4,4,1,1,1,1,1,4
					 ]


	const TRACK_ROAD = 0;
	const TRACK_WALL = 1;
	const TRACK_PLAYER_START = 2;
	const TRACK_GOAL = 3;
	const TRACK_TREE = 4;
	const TRACK_FLAG = 5;



	function isObstacleAtColRow(col, row) {
		if (col>=0 && col<TRACK_COLS && row>=0 && row<TRACK_ROWS) {
				var trackIndexUnderCoord = rowCalToArrayIndex(col, row);
				return (trackGrid[trackIndexUnderCoord] != TRACK_ROAD) ;
			} else {
				return false;
			}
		}


		function carTrackHandling(whichCar) {


		var carTrackCol = Math.floor(whichCar.x/TRACK_W);
		var carTrackRow = Math.floor(whichCar.y/TRACK_H);
		var trackIndexUnderCar = rowCalToArrayIndex(carTrackCol, carTrackRow);

		if (carTrackCol>=0 && carTrackCol<TRACK_COLS && carTrackRow>=0 &&carTrackRow<TRACK_ROWS) {

			if (isObstacleAtColRow(carTrackCol,carTrackRow)) {


				 whichCar.x -=Math.cos(whichCar.ang)*whichCar.speed;
				 whichCar.y -=Math.sin(whichCar.ang)*whichCar.speed;
				whichCar.speed *= -0.5;
				
		}
	}
}




	function rowCalToArrayIndex(col,row) {
		return col+TRACK_COLS*row;
	}

	function drawTracks() {

		for(var eachRow=0; eachRow<TRACK_ROWS; eachRow++) {

			for(var eachCol=0; eachCol<TRACK_COLS; eachCol++) {

				var arrayIndex = rowCalToArrayIndex(eachCol,eachRow);
				var tileKindHere = trackGrid[arrayIndex];
				//var useImg;
				// var useImg = trackPics[tileKindHere];
				// console.log(useImg);

				// if (tileKindHere == TRACK_ROAD) {
				// 	canvasContext.drawImage(roadPic, TRACK_W*eachCol, TRACK_H*eachRow);
				// } else if (tileKindHere == TRACK_WALL) {

				// canvasContext.drawImage(wallPic, TRACK_W*eachCol,TRACK_H*eachRow);
				// }


				switch (tileKindHere){

					case TRACK_ROAD:
						useImg = roadPic;
					break;
					case TRACK_WALL:
						useImg = wallPic;
					break;
					case TRACK_GOAL:
						useImg = goalPic;
					break;
					case TRACK_TREE:
						useImg = treePic;
					break;
					case TRACK_FLAG:
						useImg = flagPic;
					break;

				}
				canvasContext.drawImage(useImg, TRACK_W*eachCol, TRACK_H*eachRow);
			} 
		}// end of for loop

	} // end of drawTracks func



