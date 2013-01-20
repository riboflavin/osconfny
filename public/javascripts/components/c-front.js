var fxopts = {'effect':'slide','duration':'300'};

$(document).ready(function(){

$('.section').css('display','none');
$('#about_s').css('display','');
$('.brand').bind('click',function(){
	$('#about').click();
});

$('#navbar li a').bind('click',function(){
	var show_section = '#' + $(this).attr('id') + '_s';
	var $show_section = $(show_section);
	var $visible = $('.section:visible');
	if (typeof($visible.get(0)) === 'undefined')  
	{
		//if nothing is showing, just show the section
		$show_section.show(fxopts);
	}
	else if (!($show_section.is(':visible')))
	//we know something is showing. if the section isn't, hide everything else and then show the section
	{
		$visible.hide('slide',function(){
		$show_section.show(fxopts);      
		});
	}
	//do nothing if the section is already showing
	//regardless of whether it is showing alongside other things (since that should never happen)
});

$('#talkbutton').bind('click',function(){$('#talksubmit').show(fxopts);});

$('#submit_button').bind('click',function(){
	$('#submit_button').text("Working...").removeClass('btn-danger').removeClass('btn-primary').removeClass('btn-success');
	$('#email_address').parent().removeClass('error').removeClass('success');
	$.post("/",$('#signup_form_data').serialize(),function(data){
		console.log(data.response);
		if (data.response == 'OK') {
			$('#thanks').css('display','');
			$('#thanks').text("Thanks! We'll be in touch.");
			$('#submit_button').removeClass('btn-danger').removeClass('btn-primary').addClass('btn-success').text("Thanks!");
			$('#email_address').parent().removeClass('error').addClass('success');
		}
		else {
			$('#thanks').text(data.response);
			$('#thanks').css('display','');
			$('#submit_button').removeClass('btn-primary').removeClass('btn-success').addClass('btn-danger').text("Submit");
			$('#email_address').parent().removeClass('success').addClass('error');
		}
	});
});
});
