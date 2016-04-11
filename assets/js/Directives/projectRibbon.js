ninja.directive('projectRibbon', function(Data, $compile) {
    return {
        restrict: 'AE',
        transclude: true,
        controller: function($scope, $element, $attrs) {
            $element.addClass('project-ribbon-directive');
        },
        templateUrl: '/assets/templates/projectRibbon.html'
    };
});
