$(document).ready(function() {
	if (!$.support.transition)
		  $.fn.transition = $.fn.animate;
	$("#main").shadow({type:'sides', sides:'vt-2'});
	$('.menulink').mouseenter(function(){	
		if ($(this).hasClass('selected')){
			$(this).css('zIndex','3');
			$(this).transition({paddingBottom: '10px'},100);}
		else {$(this).transition({ backgroundColor: '#d85656', color: 'white' },100);}
		$(this).bind('mouseout',function(){
			if ($(this).hasClass('selected')){
				$(this).transition({paddingBottom: '0px'},30);}
			else {$(this).transition({backgroundColor: 'white', color: 'black'},30);}
			$(this).unbind('mouseout');
			return false;
		});
		return false;
	});
});