<?php
$randomAmountOfAccidents = rand(1, 25);
		// $accidentsArray = '<script>var accidentsArray = ['.$randomAmountOfAccidents.']</script>';
$accidentsArray = array($randomAmountOfAccidents);
		// NOTE: Creating accidents by looping through array
for($i = 0; $i<$randomAmountOfAccidents; $i++){
			// Maybe make randomisation dependant on browser size. very hard to find out screen size with php better to do it in JS
	$randomPosTop = rand(0, 550);
	$randomPosLeft = rand(0, 1200);
	$accident = '<i class="accident fa fa-exclamation-circle fa-2x" style="top:'.$randomPosTop.'px; left:'.$randomPosLeft.'px;"></i>';  //Testavimui isjungtas !!!!!!!!!!!!!
	echo $accident;
}
?>


<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

</head>
<body>
	<div id="container">	</div>
	<div class="sideMenu">
		<div id="statistics">
			<h2><?php echo 'The initial amount of accidents: '.$randomAmountOfAccidents;
			echo '<br>'; ?></h2>
			<h2>Number of drones:  <span id="droneCount"></span></h2>
			<h2>Attended acidents:  <span id="attendedAccidents"></span></h2>
		</div>
		<div id="droneMenu">
		
			<div id="droneBox">
			<!-- <div class="drone"></div> -->
			</div>
			<div>
			<i class="fa fa-trash" id="delete"></i>
			<h2>Click the trashcan to remove drones </h2>		
			</div>
		</div>
	</div>
	<div id="createDrones">
		<div id="createDroneBox">
			<h2>Enter the amount of drones</h2>
			<input type="number" id="tempDroneCount"></br>
			<button id="clickedToCreate">Create</button>
		</div>
	</div>
	<div class="bottomMenu">
		<ul>
			<li><a href="#" id="dronesPannel">Create Drones</a></li>
			<li><a href="#" id="statsPannel">Statistics</a></li>
			<li><a href="#" id="dronePannel">Drone pannel</a></li>
		</ul>
	</div>
				
				

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script type="text/javascript" src="script.js"></script>			
</body>
</html>