var app = angular.module('app',['ionic','ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state(
			'home',{
				url:'/home',
				templateUrl:"template/home.html",
				controller:"homeController"
			}
		)
	.state('detail',{
		url:'/detail/:name/:city/:country/:age',
		templateUrl:'template/detail.html',
		controller:'detailController'
	})
})