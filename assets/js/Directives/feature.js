ninja.directive('feature', function(Data, $compile) {
    return {
        restrict: 'AE',
        transclude: true,
        scope: {
            icon: '@icon',
            class: '@class',
            title: '@label',
            btnUrl: '@btnurl',
            btnTag: '@btntag'
        },
        controller: function($scope, $element) {
            $element.addClass('feature-directive');
        },
        templateUrl: '/assets/templates/feature.html'
    };
});
