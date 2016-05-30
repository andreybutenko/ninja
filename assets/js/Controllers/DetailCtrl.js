ninja.controller('DetailCtrl', ['$scope', '$state', '$stateParams', 'Data', function($scope, $state, $stateParams, Data) {
    var req = $stateParams.project;
    var projectDetails = {};

    var allProjects = Data.projects;

    for(var i = 0; i < allProjects.length; i++) {
        if(allProjects[i].id == req) {
            projectDetails = allProjects[i];
        }
    }

    if(typeof projectDetails.id == 'undefined') {
        $state.go('home');
    }
    $scope.projectDetails = projectDetails;
    $scope.articleSections = Data.details[req];

    function darken(color, percent) {
        // Source: http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors/13542669#13542669
        var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
        return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
    }

    $scope.darken = darken;
}]);
