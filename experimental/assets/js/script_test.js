$('document').ready(function(){

	const s = $('.container .section');
	const nav = $('.nav-bar .line a');
	s.waypoint({
		handler: function(direction){
			const active = $(this);
			if(direction == 'up')
				active = active.prev();
			const active_link = $('.nav-bar .line a[href="#'+active.attr('id')+'"]');
			
		
			nav.parent().removeClass('selected');
			active_link.parent().addClass('selected');
		},
		offset: '35%'
	});

});
(function($){
	$('li a').click(function(){
		console.log($(this).attr('id'));
		//$('body').scrollTop($(this).attr('id'));
	});
});