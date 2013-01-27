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

$('#fsp').bind('click',function(){
	$('.section:visible').hide('slide',function(){
		$('#fsp_s').show(fxopts);
	});
});

$('#blog_s').tumblr({hostname: 'opentechnyc.tumblr.com'});
});
