// Very simple controller
MovieSearch.controller('Search', ['$scope','getMoviesFrom','$routeParams', function($scope,getMoviesFrom,$routeParams) {

	// On page Load get url and send request
	getMoviesFrom($routeParams.search,function(result){
		// add result into view
		$scope.MovieList = result.data.results;
	});
	//  onChange_Input get movies 
	$scope.onChange_Input = function(value) {

		// Get Movies from Value Passed 
		getMoviesFrom(value,function(result){
			// add result into view
			$scope.MovieList = result.data.results;
		});

	};
}]);



