ninja.controller('PlayCtrl', function($scope) {
    $scope.expanded = false;
    $scope.connections = 4;
    $scope.points = 20;
    $scope.wait = 200;
    $scope.rawStyle = false;

    $scope.$watch('points',function(val,old) {
        if($scope.connections > $scope.points) {
            $scope.connections = $scope.points;
        }
    });
    $scope.$watch('connections',function(val,old) {
        if($scope.connections > $scope.points) {
            $scope.connections = $scope.points;
        }
    });

    $scope.update = function update() {
        var style = 0;
        if($scope.rawStyle) {
            style = 1;
        }
        visualizer.update($scope.connections, $scope.points, $scope.wait, style);
    }
});
