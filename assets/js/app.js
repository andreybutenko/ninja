var ninja = angular.module('ninja', ['ui.router', 'ngAnimate', 'ngSanitize']);

ninja.run(function($rootScope) {
    var titleTail = ' - Andrey Butenko'
    $rootScope.title = 'Andrey Butenko';
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams) {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
       console.log(event, toState, toParams);

       if(toState.name == 'detail') {
           $rootScope.title = (toState.views[toParams.project + '@detail'].title || toState.title) + titleTail;
       }
       else {
           $rootScope.title = toState.title + titleTail;
       }
    });
});

ninja.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('home', {
            url: '/',
            title: 'Portfolio',
            views: {
                'main': {
                    templateUrl: '/pages/home.html',
                    title: 'Home'
                },
                'tabs': {
                    templateUrl: '/pages/tabs.html'
                }
            }
        })
        .state('detail', {
            url: '/detail/:project',
            title: 'Projects',
            views: {
                'main': {
                    templateUrl: '/pages/detail.html'
                },
                'tabs': {
                    templateUrl: '/pages/tabs.html'
                },
                'cart@detail': {
                    title: 'Laptop Cart',
                    templateUrl: '/pages/portfolio/cart.html'
                },
                'deskorganizer@detail': {
                    title: 'Desk Organizer',
                    templateUrl: '/pages/portfolio/deskorganizer.html'
                },
                'candydispenser@detail': {
                    title: 'Candy Dispenser',
                    templateUrl: '/pages/portfolio/candydispenser.html'
                },
                'bowl@detail': {
                    title: 'To-Go Bowl',
                    templateUrl: '/pages/portfolio/bowl.html'
                },
                'formalwear@detail': {
                    title: 'Formal Wear',
                    templateUrl: '/pages/portfolio/formalwear.html'
                },
                'multiplayer@detail': {
                    title: 'Multiplayer Demo',
                    templateUrl: '/pages/portfolio/multiplayer.html'
                },
                'obstaclecar@detail': {
                    title: 'Obstacle-Avoiding Car',
                    templateUrl: '/pages/portfolio/obstaclecar.html'
                },
                'kiosk@detail': {
                    title: 'Kiosk'
                },
                'messenger@detail': {
                    title: 'Messenger'
                },
                'vasn@detail': {
                    title: 'VASN'
                },
            }
        })
        .state('skills', {
            url: '/skills',
            title: 'Skills',
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
