$(document).ready(function() {
	/*=================Slider====================*/
		$('#slides').slick({
		  infinite: true,
		  slidesToShow: 1,
		  centerMode: true,
		  variableWidth: true,
		  dots: true,
		  arrows: false,
		  slidesToScroll: 1,
		  responsive: [
		    {
		      breakpoint: 1250,
		      settings: {
		        infinite: true,
		  		slidesToShow: 1,
		  		centerMode: true,
		  		variableWidth: false,
		  		dots: true,
		  		arrows: false,
		  		slidesToScroll: 1
		      }
		    },
		    
		  ]
		});
		
		$('#slides-newcastle').slick({
		  infinite: true,
		  slidesToShow: 1,
		  centerMode: true,
		  variableWidth: true,
		  dots: true,
		  arrows: false,
		  slidesToScroll: 1,
		  responsive: [
		    {
		      breakpoint: 1250,
		      settings: {
		        infinite: true,
		  		slidesToShow: 1,
		  		centerMode: true,
		  		variableWidth: false,
		  		dots: true,
		  		arrows: false,
		  		slidesToScroll: 1
		      }
		    },
		  ]
		});
/*==============/Slider=================*/
	
/*==================Smooth scroll========================*/
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let $this = $(this),
			blockID = $this.data('scroll'),
			blockOffset = $(blockID).offset().top;

			/*$("#nav a").removeClass("active");
			$this.addClass("active");

			$("#nav").removeClass("active");
			$("#navToggle").removeClass("active");*/

		$("html, body").animate ({
			scrollTop: blockOffset - 0
		}, 500);

	});
/*==============/Smooth scroll=================*/

/*Menu nav toggle*/
	$(".header__burger").on("click", function(event) {
		event.preventDefault();
		$(".mobile-menu").addClass("show");
		$('body').addClass("hidden");
	});
	$(".mobile-menu__close").on("click", function(event) {
		event.preventDefault();
		$(".mobile-menu").removeClass("show");
		$('body').removeClass("hidden");
	})

});