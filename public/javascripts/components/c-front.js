$(document).ready(function(){
$('#talk').attr('checked',false);
$('#talk').bind('click',function(){$('#talkdetails').toggle()}); 

$('#submit_button').bind('click',function(){
	$('#submit_button').text("Working...").removeClass('btn-danger').removeClass('btn-primary').removeClass('btn-success');
	$.post("/",$('#signup_form').serialize(),function(data){
		console.log(data.response);
		if (data.response == 'OK') {
			$('#thanks').css('display','');
			$('#thanks').text("Thanks! We'll be in touch.");
			$('#submit_button').removeClass('btn-danger').removeClass('btn-primary').addClass('btn-success').text("Thanks!");
			$('#email_address').parent().parent().removeClass('error').addClass('success');
		}
		else {
			$('#thanks').text(data.response);
			$('#thanks').css('display','');
			$('#submit_button').removeClass('btn-primary').removeClass('btn-success').addClass('btn-danger').text("Submit");
			$('#email_address').parent().parent().removeClass('success').addClass('error');
		}
	});
});
});
