$(document).ready(function() {

	$(".top-navigation-button").click(function() {
		$(".top-navigation ul").slideToggle();
	});

	$(function(){
	 var topPos = $('.top-navigation').offset().top; //topPos - это значение от верха блока до окна браузера
	 $(window).scroll(function() {
	  var top = $(document).scrollTop();
	  if (top > topPos) $('.top-navigation').addClass('fixed');
	  else $('.top-navigation').removeClass('fixed');
	 });
	});

	$(function(){
  var $button    = $('.js-button'),
      $container = $('.js-container');

  $button.on('click', function(){
    var toggleText = $(this).data('toggle-text');

    $(this).data('toggle-text', $(this).text())
           .text(toggleText);

    $container.toggleClass('hidden');
  });
});

$('.box').each(function() {
    //set size
    var th = $(this).height(),//box height
        tw = $(this).width(),//box width
        im = $(this).children('img'),//image
        ih = im.height(),//inital image height
        iw = im.width();//initial image width
    if (ih>iw) {//if portrait
        im.addClass('ww').removeClass('wh');//set width 100%
    } else {//if landscape
        im.addClass('wh').removeClass('ww');//set height 100%
    }
    //set offset
    var nh = im.height(),//new image height
        nw = im.width(),//new image width
        hd = (nh-th)/2,//half dif img/box height
        wd = (nw-tw)/2;//half dif img/box width
    if (nh<nw) {//if portrait
        im.css({marginLeft: '-'+wd+'px', marginTop: 0});//offset left
    } else {//if landscape
        im.css({marginTop: '-'+hd+'px', marginLeft: 0});//offset top
    }
});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
/*
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});
*/
	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});
