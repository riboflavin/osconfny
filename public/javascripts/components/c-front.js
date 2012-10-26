$(document).ready(function(){
$('#talk').attr('checked',false);
$('#talk').bind('click',function(){$('#talkdetails').toggle()}); 

$('#submit_button').bind('click',function(){
	$.post("/",$('#signup_form').serialize(),function(data){
		console.log(data.response);
		if (data.response == 'OK') {
			$('#thanks').css('display','');
			$('#thanks').text("Thanks! We'll be in touch.");
			$('#submit_button').removeClass('btn-danger').addClass('btn-success');
			$('#email_address').parent().parent().removeClass('error').addClass('success');
		}
		else {
			$('#thanks').text(data.response);
			$('#thanks').css('display','');
			$('#submit_button').removeClass('btn-primary').addClass('btn-danger');
			$('#email_address').parent().parent().removeClass('success').addClass('error');
		}
	});
});
});
