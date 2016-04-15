ninja.controller('SkillsCtrl', function(Data, $scope) {
    $scope.skills = Data.skills;

    var currentTab = 4;

    $scope.getSkill = function getSkill(id) {
        for(var i = 0; i < $scope.skills.length; i++) {
            if($scope.skills[i].id == id) {
                return $scope.skills[i];
            }
        }
    }

    $scope.isTabSelected = function isTabSelected(index) {
        return index == currentTab;
    }

    $scope.getCurrentTab = function getCurrentTab() {
        return $scope.skills[currentTab];
    }

    $scope.switchToTab = function switchToTab(index) {
        currentTab = index;
    }
});
