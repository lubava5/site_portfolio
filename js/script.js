//========================================================================================================================================================
particlesJS.load('particles-js', '/js/particles.json', function() {
  
});


$(document).ready(function() {
$(window).resize(function(event) {
	mainblock();
});
function mainblock(){
		var h=$(window).outerHeight();
	$('.mainblock').css('min-height',h);
}
	mainblock();
//========================================================================================================================================================

$('.goto').click(function() {
  var el=$(this).attr('href').replace('#','');
  var offset=0;
$('body,html').animate({scrollTop:$('.'+el).offset().top+offset},500, function() {});

if($('.header-menu').hasClass('active')){
  $('.header-menu,.header-menu__icon').removeClass('active');
  $('body').removeClass('lock');
}
return false;
});


  function ibg(){
    $.each($('.ibg'), function(index, val) {
      if($(this).find('img').length>0){
        $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
      }
    });
  }
  ibg();

  $(window).scroll(function(event) {
		var s=0-$(this).scrollTop()/1.5;
	$('.mainblock__image').css('transform','translate3d(0, '+s+'px, 0)');
});


//BURGER
$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.icon-menu,.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//========================================================================================================================================================
});

//block appearance


const animItems = document.querySelectorAll('._anim-items'); 

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

//slider
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:4,
		});
		$('.slider').on('beforeChange',function(event,slick,currentSlide,nextSlide){
			//console.log(event);
			//console.log(slick);
			//console.log(currentSlide);
			//console.log(nextSlide);
		});
		$('.slider').on('afterChange',function(event,slick,currentSlide){
			//console.log(currentSlide);
		});

		//МЕТОДЫ
		$('.slider').slick('setPosition');//Перезагрузка слайдера
		$('.slider').slick('goTo',3);//Позволяет пролиснуть до опр слайдера
		//Удобно,когда хотим,чтоб при клике по ссылке наш слайдер пролиснулся
    $('.link').click(function(event){
			$('.slider').slick('goTo',3)
		});
		//Пролистование вперед назад,то можно слелать любой объект управляющим слайдер 
		$('.slider').slick('slickPrev');
		$('.slider').slick('slickNext');
		$('.link').click(function(event){
			$('.slider').slick('slickPrev');
		});
		//Запуск autoplay и пауза
		$('.slider').slick('slickPlay');
		$('.slider').slick('slickPause');
		$('.link_play').click(function(event){
		$('.slider').slick('slickPlay');
		});
		//Управление содержимым слайдера,удаление и добавление
	

		});