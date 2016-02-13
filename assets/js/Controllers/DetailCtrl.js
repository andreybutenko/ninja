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
}]);
