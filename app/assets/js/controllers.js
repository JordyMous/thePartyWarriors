angular.module ("app")

.controller ("mainCtrl", function ($scope, moreService) {
    console.log ("mainCtrl loaded!")
})

.controller ("styleCtrl", function ($scope, moreService) {
    function setMiddleHeight () {
		var $headerHeight = $('header').outerHeight();
	    var $footerHeight = $('footer').outerHeight();
	    var $windowHeight = $(window).outerHeight();

	    var $middleHeight = $windowHeight - $headerHeight - $footerHeight;

	    $('.content').outerHeight ($middleHeight);
	}

	function setActiveButtons () {
		$('nav a').click (function () {
			$('nav a').removeClass ('active');		
			$(this).addClass ('active');
		});
	}

	$(window).on('resize', function(){
    	setMiddleHeight();
	});

	setMiddleHeight ();
	setActiveButtons ();
})