var fxopts = {'effect':'slide','duration':'300'};

if (window.location.href == 'http://osconfny.herokuapp.com')
{window.location.href = "http://opentech2013.org";}

$(document).ready(function(){
//bind brand click
$('.brand').bind('click',function(){
	$('#about_c').click();
		window.location.hash = '#about';
});

//bind call for talks
$('.youlink').bind('click',function(){
	$('#speak_c').click();
		window.location.hash = '#speak';
});

//bind bio links
$('.bioname').bind('click',function(){
	$('#speakers_c').click();
		window.location.hash = '#speakers';
});


//bind other navbar item clicks and fsp link
$('#navbar li a').add('#fsp_c').bind('click',function(){
	var show_section = '#' + $(this).attr('id').replace('_c','') + '_s';
		window.location.hash = '#' + $(this).attr('id').replace('_c','');
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

//populate tumblr
$('#blog_s').tumblr({hostname: 'opentechnyc.tumblr.com'});

//hide all sections
$('.section').css('display','none');

//go to section corresponding with hash
if (window.location.hash != '')
{$(window.location.hash + '_c').click();}
else 
{$('#about_s').css('display','');}
});
