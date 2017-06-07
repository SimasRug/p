	var mouseX;
	var mouseY;

	const KEY_LEFT_ARROW =37;
	const KEY_RIGHT_ARROW =39;
	const KEY_UP_ARROW =38;
	const KEY_DOWN_ARROW =40;

	var key_Held_Gas = false;
	var key_Held_Reverse = false;
	var key_Held_TurnLeft = false;
	var key_Held_TurnRight = false;


function setupInput() {
	canvas.addEventListener('mousemove', updateMousePosition);

		document.addEventListener('keydown', keyPressed);
				document.addEventListener('keyup', keyReleased);

}




	function updateMousePosition(evt) {
		var rect = canvas.getBoundingClientRect();
		var root = document.documentElement;

		 mouseX=evt.clientX-rect.left-root.scrollLeft;
		 mouseY=evt.clientY-rect.left-root.scrollTop;
		}


	function keyPressed(evt) {
		//console.log(evt.keyCode);
		evt.preventDefault();
		if (evt.keyCode == KEY_LEFT_ARROW) {
			key_Held_TurnLeft = true;
		}
		if (evt.keyCode == KEY_RIGHT_ARROW) {
			key_Held_TurnRight = true;
		}
		if (evt.keyCode == KEY_UP_ARROW) {
			key_Held_Gas = true;
		}
		if (evt.keyCode == KEY_DOWN_ARROW) {
			key_Held_Reverse = true;
		}
	}




	
	function keyReleased(evt) {
		if (evt.keyCode == KEY_LEFT_ARROW) {
			key_Held_TurnLeft = false;
		}
		if (evt.keyCode == KEY_RIGHT_ARROW) {
			key_Held_TurnRight = false;
		}
		if (evt.keyCode == KEY_UP_ARROW) {
			key_Held_Gas = false;
		}
		if (evt.keyCode == KEY_DOWN_ARROW) {
			key_Held_Reverse = false;
		}
	}	