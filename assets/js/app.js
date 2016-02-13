var ninja = angular.module('ninja', ['ui.router', 'ngSanitize']);

ninja.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/pages/home.html'
        })
        .state('detail', {
            url: '/detail/:project',
            views: {
                '': {
                    templateUrl: '/pages/detail.html'
                },
                'paragraph@detail': {
                    templateUrl: '/pages/articles/paragraph.html'
                },
                'header@detail': {
                    templateUrl: '/pages/articles/header.html'
                }
            }
        });
});
