$(document).ready(function(){

	findLocation()
	whatTime();
	$('body').fadeIn(1000);
	

			// call location


			$('#CF').click(function(){
				$('#CF').css({'display':'none'});
				$('#tempC').css({'display':'none'});
				$('#FC').css({'display':'inline'});
				$('#tempF').css({'display':'inline'});
			});
			$('#FC').click(function(){
				$('#FC').css({'display':'none'});
				$('#tempF').css({'display':'none'});
				$('#CF').css({'display':'inline'});
				$('#tempC').css({'display':'inline'});
			});
		});


function findLocation(){
	var link = "http://freegeoip.net/json/";
	$.getJSON(link, function(jData){
		// console.log(jData);
		whereAreWe(jData.latitude,jData.longitude);
		howsTheWaether(jData.latitude,jData.longitude);
	});
}
function whereAreWe(lat, lot) {
	var locationKey = "AIzaSyBPWt6dkESxCM2EYWGunf5ICvhdI0eow1Y";
	var link = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lot+"&key="+locationKey;
	$.getJSON(link, function(jData) {
		$('#location').html(jData.results[4].formatted_address);
	})
}

function howsTheWaether(lat, lot) {
	var APIKey ="342f888a6ea404f39c6ab0a446b3f63a"; 
	var link = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lot+"&APPID="+APIKey;
	$.getJSON(link, function(jData){
     	// console.log(jData);
     	var celsius = jData.main.temp - 273.15;
     	celsius = Math.round(celsius);
     	var fahrenheit = (jData.main.temp *(9/5)) - 459.64;
     	fahrenheit = Math.round(fahrenheit);
     	$('#tempC').html(celsius + '&deg');
     	$('#tempF').html(fahrenheit + '&deg');
     	$('#sky').html(jData.weather[0].main);
     	wheresTheWind (jData.wind.deg, jData.wind.speed);
     	// console.log(jData.weather);
     	$('#weatherIcon').html('<img src="http://openweathermap.org/img/w/'+ jData.weather[0].icon +'.png" alt="">');
     });
	

}

function wheresTheWind (deg, speed) {
	var wind;
	if (deg>11.25 && deg<33.75){
		wind =  "NNE";
	}else if (deg>33.75 && deg<56.25){
		wind =  "ENE";
	}else if (deg>56.25 && deg<78.75){
		wind =  "E";
	}else if (deg>78.75 && deg<101.25){
		wind =  "ESE";
	}else if (deg>101.25 && deg<123.75){
		wind =  "ESE";
	}else if (deg>123.75 && deg<146.25){
		wind =  "SE";
	}else if (deg>146.25 && deg<168.75){
		wind =  "SSE";
	}else if (deg>168.75 && deg<191.25){
		wind =  "S";
	}else if (deg>191.25 && deg<213.75){
		wind =  "SSW";
	}else if (deg>213.75 && deg<236.25){
		wind =  "SW";
	}else if (deg>236.25 && deg<258.75){
		wind =  "WSW";
	}else if (deg>258.75 && deg<281.25){
		wind =  "W";
	}else if (deg>281.25 && deg<303.75){
		wind =  "WNW";
	}else if (deg>303.75 && deg<326.25){
		wind =  "NW";
	}else if (deg>326.25 && deg<348.75){
		wind =  "NNW";
	}else{
		wind =  "N"; 
	}
	$("#wind").html(wind +" "+speed+ " knots");
}

function whatTime() {
	var d = new Date();
	var n = d.getHours();
	console.log(n);

	switch(n) {
		case 23:
		case 0:
		case 1:
		$('body').css({"background-image":"url(images/night.png)"});
		break;

		case 2:
		case 3:
		case 4:
		$('body').css({"background-image":"url(images/late_night.png)"});
		break;

		case 5:
		case 6:
		case 7:
		$('body').css({"background-image":"url(images/morning.png)"});
		break;

		case 8:
		case 9:
		case 10:
		$('body').css({"background-image":"url(images/late_morning.png)"});
		break;

		case 11:
		case 12:
		case 13:
		$('body').css({"background-image":"url(images/afternoon.png)"});
		break;

		case 14:
		case 15:
		case 16:
		$('body').css({"background-image":"url(images/late_afternoon.png)"});
		break;

		case 17:
		case 18:
		case 19:
		$('body').css({"background-image":"url(images/evening.png)"});
		break;

		case 20:
		case 21:
		case 22:
		$('body').css({"background-image":"url(images/late_evening.png)"});
		break;

	}
}


