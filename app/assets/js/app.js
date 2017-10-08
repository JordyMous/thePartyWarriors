angular.module ("app", ["ngRoute"])

.config (function ($routeProvider) {
	$routeProvider
		.when ("/home", {
			templateUrl: "assets/views/content/home.html",
			controller: "styleCtrl"
		})
		.when ("/about", {
			templateUrl: "assets/views/content/about.html",
			controller: "styleCtrl"
		})
		.when ("/news", {
			templateUrl: "assets/views/content/news.html",
			controller: "styleCtrl"
		})
		.when ("/contact", {
			templateUrl: "assets/views/content/contact.html",
			controller: "styleCtrl"
		})
		.otherwise ({
			redirectTo: "/home"
		});
})

function facebookLike () {
	(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
		  	if (d.getElementById(id)) return;
		  	js = d.createElement(s); js.id = id;
		  	js.src = "//connect.facebook.net/nl_BE/sdk.js#xfbml=1&version=v2.10";
		  	fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
}

facebookLike ();