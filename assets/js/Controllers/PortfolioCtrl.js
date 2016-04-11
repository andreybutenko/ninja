ninja.controller('PortfolioCtrl', function($scope, Data) {
    var projects = Data.projects;
    $scope.projects = projects;

    $scope.getProject = function getProject(id) {
        for(var i = 0; i < projects.length; i++) {
            if(projects[i].id == id) {
                return projects[i];
            }
        }
    }

    $scope.darken = function darken(color, percent) {
        // Source: http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors/13542669#13542669
        var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
        var hex = "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
        return hex;
    }

    $scope.searchText = '';

    var categories = {
        programming: true,
        physical: false
    }

    $scope.categorySwitch = function categorySwitch(id) {
        for (var category in categories) {
            if (categories.hasOwnProperty(category)) {
                categories[category] = (category == id);
            }
        }
        $scope.searchText = '';
    }

    $scope.categorySelected = function categorySelected(id) {
        if(id == null) {
            for (var category in categories) {
                if (categories.hasOwnProperty(category)) {
                    if(categories[category] == true) {
                        return category;
                    }
                }
            }
        }
        else {
            return categories[id];
        }
    }
});
