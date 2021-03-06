(function () {

    'use strict';

    var module = angular.module('psMovies');

    function fetchMovies($http) {
        return $http
            .get('/app/movies.json')
            .then(function (response) {
                //console.log('response.data: ', response.data);
                return response.data;
            });
        // , function(httpError){
        //   // Translate the error.
        //   throw httpError.status + ' : ' + httpError.data;
        // });
    }

    function controller($http) {

        var model = this;
        model.movies = [];

        model.$onInit = function () {
            fetchMovies($http)
                .then(function (movies) {
                    model.movies = movies;
                });
        };

        model.goTo = function (id) {
            model
                .$router
                .navigate(['Details', {
                    id: id
                }, 'Overview']);
        };
        
        model.setRating = function(movie, newRating){
            movie.rating = newRating;
        }

        model.upRating = function (movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            }
        };

        model.downRating = function (movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            }
        };
    }

    module.component('movieList', {
        templateUrl: '/app/movie-list.component.html',
        controllerAs: 'model',
        controller: ['$http', controller],
        bindings: {
            '$router': '<'
        }
    });

}());