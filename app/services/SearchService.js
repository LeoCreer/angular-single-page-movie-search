// Very simple Service
MovieSearch.service('getMoviesFrom', function($http){
	//  Get Movies 
	this.getMoviesFrom = function(query, callback){

	    var method = 'GET';
	    var url = 'http://api.themoviedb.org/3/search/movie?api_key=42b3e60b6636f50062f6d3579100d83f&query='+query+'';

		$http({method: method, url: url}).
	        then(function(response) {
	        	
	        	// on Success execute anonymous call back function passing data
	        	callback(response);

	        }, function(response) {
	        	alert('Something bad happened with Movie API');
	      });

	}
	//  Return function as service to insure maximum re-usability through out app.
	return  this.getMoviesFrom;

});