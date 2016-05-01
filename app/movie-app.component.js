(function () {

    'use strict';

    var module = angular.module('psMovies');

    module.component('movieApp', {
        templateUrl: '/app/movie-app.component.html',
        $routeConfig: [
            {
                path: '/list',
                component: 'movieList',
                name: 'List'
            },
            {
                path: '/about',
                component: 'appAbout',
                name: 'About'
            },
            {
                path: '/detail/:id/...',
                component: 'movieDetails',
                name: 'Details'
            },
            {
                path: '/**',
                redirectTo: ['List']
            }
        ]
    });

}());