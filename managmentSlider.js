

	$(document).ready(function(){
	
	
	
	$('.hr a').click(function(e){
		e.preventDefault();
		$('.hr .active').removeClass();
		$(this).addClass('active');
		$(this).css('background-image','url(img/active.png)');
		var tab = $(this).attr('href');
	
	
	});
	
});
	
	