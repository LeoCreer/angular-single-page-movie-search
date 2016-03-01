MovieSearch.config(['$routeProvider', '$locationProvider',
	 function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/', {
			templateUrl:'/app/views/search.html',
			controller: 'Search'
		})
		.when('/:search', {
			templateUrl:'/app/views/search.html',
			controller: 'Search'
		})
		.otherwise({redirectTo: '/'});

		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
}]);
