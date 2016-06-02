ninja.directive('dynamicTitle', ['$rootScope', '$timeout',
    function($rootScope, $timeout) {
        var title = 'Andrey Butenko';
        var titleTail = ' - Andrey Butenko'
        return {
            link: function(scope, element) {
                var listener = function(event, toState, toParams) {
                    if(toState.name == 'detail') {
                        title = (toState.views[toParams.project + '@detail'].title || toState.title) + titleTail;
                    }
                    else {
                        title = toState.title + titleTail;
                    }

                    $timeout(function() {
                        element.text(title);
                    }, 0, false);
                };

                $rootScope.$on('$stateChangeSuccess', listener);
            }
        };
    }
]);
