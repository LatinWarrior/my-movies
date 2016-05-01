(function () {

    'use strict';

    var module = angular.module('psMovies');

    module.component('movieDetails', {
        templateUrl: '/app/movie-details.component.html',
        $canActivate: function () {
            // Use services to make this decision.
            return true;
        },
        $routeConfig: [
            {
                path: '/overview',
                component: 'movieOverview',
                name: 'Overview'
            }, {
                path: '/cast',
                component: 'movieCast',
                name: 'Cast'
            }, {
                path: '/director',
                component: 'movieDirector',
                name: 'Director'
            }
        ],
        controllerAs: 'model',
        controller: function () {

            var model = this;

            model.$routerOnActivate = function (next, previous) {
                console.log('next: ', next);
                model.id = next.params.id;
            };
        }

    });
    
    module.component('movieOverview', {
        template: 'This is the movie overview.'
    });
    
    module.component('movieCast', {
        template: 'This is the info about the movie cast.'
    });
    
    module.component('movieDirector', {
        template: 'This is the info about the movie director.'
    });

}());