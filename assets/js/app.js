var ninja = angular.module('ninja', ['ui.router', 'ngAnimate', 'ngSanitize']);

ninja.run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
});

ninja.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

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
                'cart@detail': {
                    templateUrl: '/pages/portfolio/cart.html'
                },
                'deskorganizer@detail': {
                    templateUrl: '/pages/portfolio/deskorganizer.html'
                },
                'candydispenser@detail': {
                    templateUrl: '/pages/portfolio/candydispenser.html'
                },
                'bowl@detail': {
                    templateUrl: '/pages/portfolio/bowl.html'
                },
                'formalwear@detail': {
                    templateUrl: '/pages/portfolio/formalwear.html'
                },
                'multiplayer@detail': {
                    templateUrl: '/pages/portfolio/multiplayer.html'
                },
                'obstaclecar@detail': {
                    templateUrl: '/pages/portfolio/obstaclecar.html'
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
                'technologies@skills': {
                    templateUrl: '/pages/skills/technologies.html'
                },
                'sketching@skills': {
                    templateUrl: '/pages/skills/slideshow.html'
                },
                'cad@skills': {
                    templateUrl: '/pages/skills/slideshow.html'
                },
                'editing@skills': {
                    templateUrl: '/pages/skills/slideshow.html'
                },
                'model@skills': {
                    templateUrl: '/pages/skills/slideshow.html'
                },
                'other@skills': {
                    templateUrl: '/pages/skills/other.html'
                }
            }
        });
});
