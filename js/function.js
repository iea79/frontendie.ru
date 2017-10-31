$(document).ready(function() {

	// First screen full height
	function setHeiHeight() {
	    $('#first_screen .container_center, #about .container_center').css({
	        height: $(window).height() + 'px'
	    });
	}
	setHeiHeight();
	$(window).resize( setHeiHeight );


	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});

	// Stiky menu
    var HeaderTop = $('#header').offset().top + $(window).height() - 51;
    
    $(window).scroll(function(){
        if( $(window).scrollTop() > HeaderTop ) {
        	$('#header').addClass('stiky');
        } else {
            $('#header').removeClass('stiky');
        }
    });

    // Smooth scroll to ID and add class active for current link
	var menu_selector = "#header";

    $(document).on("scroll", onScroll);
 
    $("#header a").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + " a").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top -49
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
 
    });
	
	function onScroll(){
	    var scroll_top = $(document).scrollTop();
	    $(menu_selector + " a").each(function(){
	        var hash = $(this).attr("href");
	        var target = $(hash);
	        if (target.offset().top <= scroll_top && target.offset().top + target.outerHeight() > scroll_top) {
	            $(menu_selector + " a").removeClass("active");
	            $(this).addClass("active");
	        } else {
	            $(this).removeClass("active");
	        }
	    });
	}

	// First screen scroller 
    var isAnimating  = false;
	var lastScrollTop = 0;

	$(window).scroll(function(event){
		var st = $(this).scrollTop();
        // e.preventDefault();
        // e.stopPropagation();

	    var headerTop = $('#first_screen').height();
	    	nextSection = $('#about').offset().top;

		if( isAnimating ) {
		   return false;
		}

		if (st > lastScrollTop){
		   // downscroll code
		    isAnimating  = true;
		    if ($(window).scrollTop() < headerTop) {	    	
		        $('html, body').animate({ scrollTop: nextSection }, 500, function(){
		            isAnimating  = false;
		        });
		    } else {
				isAnimating  = false;
		    }

		} else {
			isAnimating  = false;
		}

		lastScrollTop = st;

	});


	// Portfolio filter
	$('.portfolio_grid .grid__wrapper').addClass('hidden');

	$('#portfolio_filter').on('click', 'a', function(event) {
		event.preventDefault();

		var filterLink = $(this).attr('href');
			filterItem = $('.portfolio_grid .grid__wrapper');
			filterItemLink = filterItem.hasClass(filterLink);

		$('#portfolio_filter a').removeClass('active');
		$(this).addClass('active')


		if (filterLink != 'all') {
			filterItem.addClass('hidden').removeClass('visiblity');
			filterItem.each(function(index, el) {
				if ($(this).hasClass(filterLink)) {
					$(this).removeClass('hidden').addClass('visiblity');
				}
			});
		} else {
			filterItem.removeClass('hidden');
		}

	});

	// Run plugins after scrioll to element 
	$('.about_title').viewportChecker({
		callbackFunction: function () {
			$('.about_title').typed({
		        strings: ["^500 Здравствуйте!"],
		        typeSpeed: 1,
		        preStringTyped: function() {
		        	audioPlay();
		        },
		        onStringTyped: function() {
		        	audioStop();
		        },
		    });

			$(".about_text span").typed({
		        strings: ["^1500 Меня зовут Евгений, ^50 я профессиональный HTML-верстальщик. <br/>^50 Занимаюсь вёрсткой сайтов с 2010 года, <br/>^50  для меня это не просто хобби, а основной заработок и поэтому к работе отношусь серьезно и с большой ответственностью."],
		        typeSpeed: -100,
		        preStringTyped: function() {
		        	audioPlay();
		        },
		        onStringTyped: function() {
		        	audioStop();
		        	$('.typed-cursor').hide();
		        },
		    });
		}
	});

	$('.skills_grid').viewportChecker({
		callbackFunction: function () {
			// setTimeout(function() {
				// $('#about .section_title').addClass('open');

				// $('.skills_grid').addClass('open');
				// Circleful.js
				$('#skill_html').circliful({
					percent: 95,
				});

				$('#skill_css').circliful({
					percent: 95,
				});

				$('#skill_jquery').circliful({
					percent: 80,
				});

				$('#skill_js').circliful({
					percent: 60,
				});
			// }, 6000);
		}
	});

	$('.portfolio_grid').viewportChecker({
		callbackFunction: function () {
			$('.portfolio .grid__wrapper').removeClass('hidden');
			// console.log('removeClass hidden');
			$(this).removeClass('visiblity');
			// console.log('removeClass visiblity');
		}
	})

	// Sliders
	$('.technology_slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 5,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});

	$('.review_slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	})

	// var audio = document.getElementsByTagName('audio')[index];

	function audioPlay() {
		document.getElementById('audio').play();
	}

	function audioStop() {
		document.getElementById('audio').pause();
	}

	filleUpload();

	if ($(window).width() > 1024) {	
	    // Init pollifill
	    $('.bg_canvas').constellation({
	        star: {
	            width: 2,
	            color: 'rgba(255, 255, 255, 0.4)'
	        },
	        line: {
	            color: 'rgba(255, 255, 255, 0.2)'
	        },
	        radius: 300
	    });

	    $('.technology .bg_canvas').constellation({
	        star: {
	            width: 2,
	            color: 'rgba(32, 163, 255, 0.3)'
	        },
	        line: {
	            color: 'rgba(32, 163, 255, 0.1)'
	        },
	        radius: 100
	    })

	    // Title animation
	    $(".first_screen_title span").textAnimation({
	        mode: "highlight",
	        baseColor: "#ffffff",
	        highlightColor: "rgb(26,131,205, 0.3)",
	        delay: 35,
	        interval: 7000,
	        duration: 50
	    });  	

	} else {
		$('.bg_canvas').hide();
	}

});


function filleUpload() {
	$('.file_upload').on('click', 'button', function() {
		$(this).parent().find('input[type=file]').trigger('click');
	});

	$('input[type=file]').on('change', function() {
		var file_name = $(this).val().replace( "C:\\fakepath\\", '' );
			rezult = $(this).parent().find('.file_upload_rezult');
		if (! file_name.length) {
			rezult.html('Выберите файл');
		} else {
			rezult.html(file_name+ "<span class='file_upload_del'></span>");
		}
	});

	$('body').on('click', '.file_upload_del', function() {
		$(this).closest('.file_upload').find('input[type=file]').val('');
		$(this).closest('.file_upload').find('.file_upload_rezult').html('Выберите файл');
		console.log('clear file');
	});
}
