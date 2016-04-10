ninja.controller('TabCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.tabs = [
        {
            text: 'Projects',
            sref: 'home',
            key: '/'
        },
        {
            text: 'Skills',
            sref: 'skills',
            key: '/skills'
        }
    ];

    $scope.menuOpened = false;

    $scope.getTabStatus = function getTabStatus(key) {
        return $location.path() == key;
    }

    $scope.toggleMenu = function toggleMenu() {
        $scope.menuOpened = !$scope.menuOpened;
    }
}]);
