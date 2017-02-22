$(document).ready(function() {
	// var url = 'sitelist.php'
	var portfolioData = [
		{
			categori: 'adaptive site', 
			title: 'Blue Med', 
			hashTags: '#site #responsive',
			description: 'Адаптивный сайт медицинской тематики',
			dir: '/jobs/blu_med/', 
		}, {
			categori: 'adaptive landing', 
			title: 'JustContent', 
			hashTags: '#landing #adaptive #animation',
			description: 'Лендинг по продаже онлайн-курсов',
			dir: '/jobs/justcontent/', 
		}, {
			categori: 'adaptive landing', 
			title: 'Физика невозможного', 
			hashTags: '#landing #responsive #animation #onePageScroll',
			description: 'Адаптивный лэндинг для премиального научного шоу для взрослой аудитории "Физика невозможного"',
			dir: '/jobs/art/', 
		}, {
			categori: 'static', 
			title: 'gotovie.OOO',
			hashTags: '#landing #adaptive #animation',
			description: 'Адаптивный лендинг с анимацией для торговой компании',
			dir: '/jobs/franshisa/', 
		}, {
			categori: 'site adaptive', 
			title: 'Комсомолка', 
			hashTags: '#site #responsive #animation #ajax',
			description: 'Новостной сайт с эфектом перелистывания и Ajax загрузкой страниц',
			dir: '/jobs/komsomolka/', 
		}, {
			categori: 'landing adaptive', 
			title: 'Дмитрий Oсецкий', 
			hashTags: '#landing #responsive #animation #onePageScroll',
			description: 'Лэндинг для топового разработчика на Битрикс с js/css анимациями',
			dir: '/jobs/osetskiy/', 
		}, {
			categori: 'site adaptive', 
			title: 'Grow', 
			hashTags: '#site #flex #ajax #parallax',
			description: 'Резиновый сайт с параллакс-анимацией',
			dir: '/jobs/grow/', 
		}, {
			categori: 'landing adaptive', 
			title: 'JETBUREAU', 
			hashTags: '#landing #responsive #animation',
			description: 'Лендинг с большим количеством разных эффектов',
			dir: '/jobs/jb/', 
		}, {
			categori: 'adaptive site', 
			title: 'Global Card', 
			hashTags: '#site #responsive #symfony',
			description: 'Сайт для интернет-сервиса «Global Card» с личным кабинетом',
			dir: '/jobs/glcart/', 
		}, { 
			categori: 'static landing', 
			title: 'Приключения Барона Мюнхгаузена', 
			hashTags: '#landing',
			description: 'Лендинг для театральной постановки - «Приключения Барона Мюнхгаузена» от J&M Show в театре Эстрады им. Райкина',
			dir: '/jobs/baron/', 
		}, {
			categori: 'static landing', 
			title: '4 цилиндра', 
			hashTags: '#landing #static',
			description: 'Лендинг для магазина по продаже контрактных двигателей',
			dir: '/jobs/4cilindra/', 
		}, {
			categori: 'static site', 
			title: 'Аврора сервис', 
			hashTags: '#site #static #bitrix',
			description: 'Сайт для сервисного центра ООО «АВРОРА СЕРВИС»',
			dir: '/jobs/avrora/', 
		}, {
			categori: 'adaptive landing', 
			title: 'Александр Тарков', 
			hashTags: '#landing #responsive',
			description: 'Адаптивный лендинг для тренера-консультанта по продажам Александра Таркова',
			dir: '/jobs/businesstg/', 
		}, {
			categori: 'adaptive site', 
			title: 'EVRIMA EVENTS', 
			hashTags: '#site #responsive',
			description: 'Сайт для агентства праздников EVRIMA EVENTS с текстовой страницей',
			dir: '/jobs/evrima/', 
		}, {
			categori: 'adaptive site', 
			title: 'Биржа обмена валют', 
			hashTags: '#site #responsive #bootstrap',
			description: 'Сайт для интернет-сервиса с личным кабинетом',
			dir: '/jobs/exrates/', 
		}, {
			categori: 'static site', 
			title: 'TheGarage.Pro', 
			hashTags: '#site',
			description: 'Сайт для тюнинг-студии «TheGarage»',
			dir: '/jobs/garage/', 
		}, {
			categori: 'static site', 
			title: '«ЖилФонд»', 
			hashTags: '#site',
			description: 'Главная cтраница сайта для компании «ЖилФонд»',
			dir: '/jobs/gilfond/', 
		}, {
			categori: 'site static', 
			title: 'Hamamatsu', 
			hashTags: '#site',
			description: 'Главная cтраница сайта для компании «Hamamatsu»',
			dir: '/jobs/hamamatsu/', 
		}, {
			categori: 'landing static', 
			title: 'Inex Post', 
			hashTags: '#landing #bitrix',
			description: 'Лендинг под Битрикс для «Inex Post»',
			dir: '/jobs/inex-lp/', 
		}, {
			categori: 'site static', 
			title: 'UL.EXPRESSALE', 
			hashTags: '#site',
			description: 'Главная cтраница сайта для магазина «UL.EXPRESSALE»',
			dir: '/jobs/inier/', 
		}, {
			categori: 'landing static', 
			title: 'Движем Недвижимое.рф', 
			hashTags: '#landing',
			description: 'Просто красивый лэндинг',
			dir: '/jobs/invest-busines/', 
		}, {
			categori: 'landing static', 
			title: '«J&M CAMP»', 
			hashTags: '#landing',
			description: 'Лэндинг для J&M Camp - на этот раз театрально-музыкальный лагерь',
			dir: '/jobs/jm_camp/', 
		}, {
			categori: 'site static', 
			title: 'Mens club', 
			hashTags: '#site #adult',
			description: 'Мужской сайт «Mens club»',
			dir: '/jobs/mansclub/', 
		}, {
			categori: 'landing adaptive', 
			title: 'МебельЖе', 
			hashTags: '#landing #responsive',
			description: 'Сайт студия кухни в Волгодонске',
			dir: '/jobs/mebelge/', 
		}, {
			categori: 'landing adaptive', 
			title: 'Mile&More', 
			hashTags: '#landing #responsive',
			description: 'Лэндинг для постоянных клиентов компании MTX Connect',
			dir: '/jobs/mile&more/', 
		}, {
			categori: 'site adaptive', 
			title: 'Offshore store', 
			hashTags: '#site #responsive',
			description: 'Адаптивный сайт, один из первых сделанных мной на фрилансе',
			dir: '/jobs/offshore/', 
		}, {
			categori: 'landing adaptive', 
			title: 'ORIGAMI', 
			hashTags: '#landing #responsive #animation #onePageScroll',
			description: 'Лэндинг для маркетингового агенства, с интересным ефектом смены экрана и анимациями',
			dir: '/jobs/origami/', 
		}, {
			categori: 'landing static', 
			title: 'МОЙ ПОВАР', 
			hashTags: '#landing',
			description: 'Лэндинг для банкетной компании',
			dir: '/jobs/povar/', 
		}, {
			categori: 'site adaptive', 
			title: 'EU YACHTS', 
			hashTags: '#site #responsive',
			description: 'Адаптивный сайт для европейской компании',
			dir: '/jobs/princessyacht/', 
		}, {
			categori: 'landing adaptive', 
			title: 'SalePlan', 
			hashTags: '#landing #responsive #animation',
			description: 'Адаптивный лэндинг с анимациями при прокрутке',
			dir: '/jobs/saleplan/', 
		}, {
			categori: 'site adaptive', 
			title: 'Space Mir', 
			hashTags: '#site #responsive',
			description: 'Адаптивный сайт. Личный кабинет.',
			dir: '/jobs/space/', 
		}, {
			categori: 'landing adaptive', 
			title: 'Space Mir', 
			hashTags: '#landing #responsive #animation',
			description: 'Адаптивный лэндинг с анимациями при прокрутке',
			dir: '/jobs/spacemir/', 
		}, {
			categori: 'site static', 
			title: 'Technocon', 
			hashTags: '#site #shop',
			description: 'Статичный сайт для магазина бытовой техники',
			dir: '/jobs/tehnocon/', 
		}
	];

	if (portfolioData.length <= 9) {$('.portfolio_more_btn').hide();}

	// for (var i = 0; i < portfolioData.length; i++) {		
	for (var i = 0; i < portfolioData.length && i < 9; i++) {		
		$('.portfolio_grid').append('' +
				'<div class="grid__wrapper animated '+portfolioData[i].categori+'">' +
				'<div class="grid__item">' +
				'<img src="'+portfolioData[i].dir+'/screen.jpg" alt=""/>' +
				'<div class="portfolio_overlay">' +
				'<div class="portfolio_overlay_wrapp">' +
				'<div class="portfolio_overlay_wrapp_midle">' +
				'<div class="portfolio_overlay_title">'+portfolioData[i].title+'</div>' +
				'<div class="portfolio_overlay_text">'+portfolioData[i].description+'</div>' +
				'<div class="portfolio_overlay_hash">'+portfolioData[i].hashTags+'</div>' +
				'<a href="'+portfolioData[i].dir+'" class="portfolio_overlay_link" target="blank">Перейти на сайт</a>' +
				'</div></div></div></div></div>');
	}

	$('.portfolio_more_btn').on('click', function() {
		event.preventDefault();
		for (var i = 9; i < portfolioData.length; i++) {		
			$('.portfolio_grid').append('' +
				'<div class="grid__wrapper animated '+portfolioData[i].categori+'">' +
				'<div class="grid__item">' +
				'<img src="'+portfolioData[i].dir+'/screen.jpg" alt=""/>' +
				'<div class="portfolio_overlay">' +
				'<div class="portfolio_overlay_wrapp">' +
				'<div class="portfolio_overlay_wrapp_midle">' +
				'<div class="portfolio_overlay_title">'+portfolioData[i].title+'</div>' +
				'<div class="portfolio_overlay_text">'+portfolioData[i].description+'</div>' +
				'<div class="portfolio_overlay_hash">'+portfolioData[i].hashTags+'</div>' +
				'<a href="'+portfolioData[i].dir+'" class="portfolio_overlay_link" target="blank">Перейти на сайт</a>' +
				'</div></div></div></div></div>');
		}
		$(this).hide();
	});

});
