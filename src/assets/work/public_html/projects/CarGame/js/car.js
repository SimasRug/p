	

	const GROUNDSPEED_DECAY_MULT = 0.9;
	const DRIVE_POWER = 0.7;
	const REVERSE_POWER = 0.2;
	const TURN_RATE = 0.08;
	const MIN_SPEED_TO_TURN = 0.5;

function carClass() {
	this.x = 75;
	this.y = 75;
	this.ang = 0;
	this.speed = 0;
 

  	this.reset = function() {
		for(var eachRow=0; eachRow<TRACK_ROWS; eachRow++) {

			for(var eachCol=0; eachCol<TRACK_COLS; eachCol++) {



				var arrayIndex = rowCalToArrayIndex(eachCol,eachRow);
				if(trackGrid[arrayIndex]== TRACK_PLAYER_START){

					trackGrid[arrayIndex]==TRACK_ROAD;

					this.ang = -Math.PI/2;
					this.x= eachCol*TRACK_W/2;
					this.y= eachRow*TRACK_H/2;
					return;
				}
			}
		}
	}



	this.move = function() {

		this.speed *= GROUNDSPEED_DECAY_MULT; 
		if(key_Held_Gas) {
			this.speed += DRIVE_POWER;
		}
		if(key_Held_Reverse) {
			this.speed -= REVERSE_POWER;
		}
		if (Math.abs(this.speed)>MIN_SPEED_TO_TURN) {
		if(key_Held_TurnLeft) {
			this.ang -= TURN_RATE;
		}
		if(key_Held_TurnRight) {
			this.ang += TURN_RATE;
		}
	}

		this.x +=Math.cos(this.ang)*this.speed;
		this.y +=Math.sin(this.ang)*this.speed;

		carTrackHandling(this);

		//carAng+=0.02;
		
	}

	this.draw=function() {
	
			drawBitmapCenteredWithRotation(carPic, this.x, this.y, this.ang);
	
	}
}

	