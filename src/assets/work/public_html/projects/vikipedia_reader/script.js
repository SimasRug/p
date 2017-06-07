var oldSearch;
$("#theme").keyup(function(event){
	if(event.keyCode == 13){
		search();
	}
});
$('#find').click(function(){
	search();
});

function search() {
	var search = $('#theme').val();
				//console.log(oldSearch,search);
				if (search == '') {
					$( "#theme" ).effect( "shake" );
					$('#theme').attr("placeholder", "This cant be empty");
				} else if( search != oldSearch) {
					$(".appendCont").children().fadeOut();
					$(".appendCont").children().remove();
					var link = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+search+'&format=json&callback=?';

					$.getJSON(link, function(jData){
						for(var i=0; i<jData[1].length; i++) {
							// console.log(jData[1][i]);
							var content = '<div class="row addedCont"><a href="'+jData[3][i]+'" target="_blank"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h3>'+jData[1][i]+'</h3><p>'+jData[2][i]+'</p></div></a></div></div>';
							$('.appendCont').append(content);
							$('.appendCont').css({'display':'none'});
							$('.appendCont').fadeIn();
						}


					});
				}
				oldSearch = search;
			};