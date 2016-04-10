var ninja = angular.module('ninja', ['ui.router', 'ngSanitize']);

ninja.run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
});

ninja.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'main': {
                    templateUrl: '/pages/home.html'
                },
                'tabs': {
                    templateUrl: '/pages/tabs.html'
                }
            }
        })
        .state('detail', {
            url: '/detail/:project',
            views: {
                'main': {
                    templateUrl: '/pages/detail.html'
                },
                'tabs': {
                    templateUrl: '/pages/tabs.html'
                },
                'paragraph@detail': {
                    templateUrl: '/pages/articles/paragraph.html'
                },
                'header@detail': {
                    templateUrl: '/pages/articles/header.html'
                }
            }
        })
        .state('skills', {
            url: '/skills',
            views: {
                'main': {
                    templateUrl: '/pages/skills.html'
                },
                'tabs': {
                    templateUrl: '/pages/tabs.html'
                },
                'sketching@skills': {
                    templateUrl: '/pages/skills/sketching.html'
                },
                'cad@skills': {
                    templateUrl: '/pages/skills/cad.html'
                },
                'prototyping@skills': {
                    templateUrl: '/pages/skills/prototyping.html'
                },
                'model@skills': {
                    templateUrl: '/pages/skills/model.html'
                },
                'illustrator@skills': {
                    templateUrl: '/pages/skills/illustrator.html'
                }
            }
        });
});
