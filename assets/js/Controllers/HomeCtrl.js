ninja.controller('HomeCtrl', ['$scope', '$state', 'Data', function($scope, $state, Data) {
    $scope.entries = Data.projects;

    $scope.widgetCluster = {
        small: Data.widgets,
        medium: [],
        large: []
    };

    var widgets = Data.widgets;

    function lengthen() {
        for(var i = 0; i < 8; i++) {
            var progress = i / (20 - widgets.length);
            widgets.push({
                fade: true,
                colors: {
                    background: darken('#000000', progress)
                }
            })
        }
    }

    function cluster(evenBreak, oddBreak, cluster) {
        var currCluster = 0;
        for(var i = 0; i < widgets.length; i++) {
            if(!Array.isArray($scope.widgetCluster[cluster][currCluster])) {
                $scope.widgetCluster[cluster].push([]);
            }

            $scope.widgetCluster[cluster][currCluster].push(widgets[i]);

            if((currCluster == 0) && ($scope.widgetCluster[cluster][currCluster].length == evenBreak)) { // if first cluster and 3 elements
                currCluster++;
                continue;
            }

            if((currCluster % 2 != 0) && ($scope.widgetCluster[cluster][currCluster].length == oddBreak)) { // if odd and 2 elements
                currCluster++;
                continue;
            }

            if((currCluster % 2 == 0) && ($scope.widgetCluster[cluster][currCluster].length == evenBreak)) { // if even and 2 elements
                currCluster++;
                continue;
            }
        }
    }

    function trim(evenBreak, oddBreak, cluster) {
        var maxIndex = $scope.widgetCluster[cluster].length - 1;
        var currCluster = maxIndex;

        if((currCluster % 2 != 0) && ($scope.widgetCluster[cluster][currCluster].length < oddBreak)) { // if odd and <2 elements
            $scope.widgetCluster[cluster].splice(currCluster, 1);
        }

        if((currCluster % 2 == 0) && ($scope.widgetCluster[cluster][currCluster].length < evenBreak)) { // if even and <3 elements
            $scope.widgetCluster[cluster].splice(currCluster, 1);
        }
    }


    lengthen();
    cluster(3, 2, 'large');
    trim(3, 2, 'large');

    cluster(2, 1, 'medium');
    $scope.widgetCluster.medium.splice($scope.widgetCluster.medium.length - 4, 3);
    trim(2, 1, 'medium');

    function darken(color, percent) {
        // Source: http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors/13542669#13542669
        var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
        return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
    }

    $scope.darken = darken;
}]);
