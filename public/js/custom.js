$(function(){
	
	
	
	$('.owl-carousel').owlCarousel({
		loop:false,
		lazyLoad:false,
		margin:0,
		autoplay:false,
		autoplayTimeout:5000,
		touchDrag  : false,
		 mouseDrag  : false,
		responsiveClass:false,
		responsive:{
			1366:{
				items:1,
				nav:true
			},
			1024:{
				items:1,
				nav:true
			},
			640:{
				items:1,
				nav:true
			},
			0:{
				items:1,
				nav:true
			}
		}
	})
	
	$('.owl-carousel-inner').owlCarousel({
		loop:false,
		lazyLoad:false,
		margin:0,
		autoplay:false,
		autoplayTimeout:5000,
		touchDrag  : false,
		 mouseDrag  : false,
		responsiveClass:false,
		responsive:{
			1366:{
				items:1,
				nav:true
			},
			1024:{
				items:1,
				nav:true
			},
			640:{
				items:1,
				nav:true
			},
			0:{
				items:1,
				nav:true
			}
		}
	})
	
	$('.owl-carousel-pro').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:15,
		autoplay:true,
		autoplayTimeout:5000,
		touchDrag  : true,
		 mouseDrag  : true,
		responsiveClass:true,
		responsive:{
			1366:{
				items:4,
				nav:true
			},
			1024:{
				items:3,
				nav:true
			},
			640:{
				items:2,
				nav:true
			},
			0:{
				items:1,
				nav:true
			}
		}
	})
	
	
		$('.owl-carousel-pros').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:15,
		autoplay:true,
		autoplayTimeout:5000,
		touchDrag  : true,
		 mouseDrag  : true,
		responsiveClass:true,
		responsive:{
			1366:{
				items:3,
				nav:true
			},
			1024:{
				items:3,
				nav:true
			},
			640:{
				items:2,
				nav:true
			},
			0:{
				items:1,
				nav:true
			}
		}
	})
	
	$('.owl-carousel-icon').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:25,
		autoplay:true,
		autoplayTimeout:5000,
		touchDrag  : true,
		 mouseDrag  : true,
		responsiveClass:true,
		responsive:{
			1366:{
				items:4,
				nav:true
			},
			1024:{
				items:3,
				nav:true
			},
			640:{
				items:2,
				nav:true
			},
			0:{
				items:1,
				nav:true
			}
		}
	})
	
	
	});