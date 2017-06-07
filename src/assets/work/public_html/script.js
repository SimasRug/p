$('#send').click(function(){
	var name = $('#name').val();
	var namebool = true;
	var email = $('#email').val();
	var emailbool = true;
	var number = $('#number').val();
	var numberbool = true;
	var message = $('#message').val();
	var messagebool = true;

	if (name == '') {
		$('#name').attr('placeholder','Please enter your name');
		$('#name').addClass('redText');
		$('#name').effect('shake');
		namebool = false;
	} 
	if (email == '') {
		$('#email').attr('placeholder','Please enter your email');
		$('#email').addClass('redText');
		$('#email').effect('shake');
		emailbool = false;
	}
	if (number == '') {
		$('#number').attr('placeholder','Please enter your number');
		$('#number').addClass('redText');
		$('#number').effect('shake');
		numberbool = false;
	}
	if (message == '') {
		$('#message').attr('placeholder','Please enter the message');
		$('#message').addClass('redText');
		$('#message').effect('shake');
		messagebool = false;
	}


	if(namebool != false && emailbool != false && numberbool != false && messagebool != false){
		
		var linkToApi = "mail.php?name="+name+"&email="+email+"&number="+number+"&message="+message;
		$.getJSON(linkToApi, function(jData){
			if (jData.status == "ok") {
				$('#sucessMessage').html('<i class="fa fa-check" aria-hidden="true"></i> Your message has been sent. Thank You! <br>');
			} else{
				if (jData.message == "API 007 - INVALID MESSAGE LENGTH") {
					$('#sucessMessage').html('<i class="fa fa-times" aria-hidden="true"></i> Your message is limited to 100 characters, I am sorry, but send me an email or give me a call. <br>').css({"color":"red"});
				} else {
					$('#sucessMessage').html('<i class="fa fa-times" aria-hidden="true"></i> I am sorry experiancing some difficulties, but send me an email or give me a call. <br>').css({"color":"red"});

				}

			}
		});
	}


	
});


$('.nav a').click(function (e) {

	var linkHref = $(this).attr("href");
	var idElement = linkHref.substr(linkHref.indexOf("#"));
	$('html, body').animate({
		scrollTop: $(idElement).offset().top
	}, 1000);
	return false;
});