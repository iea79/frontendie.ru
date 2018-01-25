$(document).ready(function() {
	// var url = 'sitelist.php'

    $.ajax({
    	url: '/porfolio.json',
    	type: 'GET',
    	dataType: 'json',
    	success: function (json) {
    		// console.log(json);
			$.each(json, function(key, value) {
				if (key < 9) {
					teplateItem(key, value)
				}
			});
    	}
    });

	$('.portfolio_more_btn').on('click', function(event) {
		event.preventDefault();
	    $.ajax({
	    	url: '/porfolio.json',
	    	type: 'GET',
	    	dataType: 'json',
	    	success: function (json) {
	    		// console.log(json);
				$.each(json, function(key, value) {
					if (key > 8) {					
						teplateItem(key, value)
					}
				});
	    	}
	    });
		// if (offset >= 30) {
			$(this).hide();
		// }
	});

});

function teplateItem(key, value, limit) {
	var pItem = [
		'<div class="grid__wrapper animated bounceIn '+value.categori+'">' +
		'<div class="grid__item">' +
		'<img src="'+value.dir+'/screen.jpg" alt=""/>' +
		'<div class="portfolio_overlay">' +
		'<div class="portfolio_overlay_wrapp">' +
		'<div class="portfolio_overlay_wrapp_midle">' +
		'<div class="portfolio_overlay_title">'+value.title+'</div>' +
		'<div class="portfolio_overlay_text">'+value.description+'</div>' +
		'<div class="portfolio_overlay_hash">'+value.hashTags+'</div>' +
		'<a href="'+value.dir+'" class="portfolio_overlay_link" target="blank">Перейти на сайт</a>' +
		'</div></div></div></div></div>'
	]
	$('.portfolio_grid').append(pItem);
}
