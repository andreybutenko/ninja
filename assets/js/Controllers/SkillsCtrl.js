ninja.controller('SkillsCtrl', ['$scope', function($scope) {
    $scope.skills = {
        technology: [
            {
                icon: '/assets/img/icons/node.png',
                name: 'Node.js',
                description: 'I\'ve done several projects with Node.js and feel comfortable using it. I\'m familiar with best practices for code organization, how modules function, as well as the value and implementation of asynchronous programming',
                proficiency: 'Experienced'
            },
            {
                icon: '/assets/img/icons/angular.png',
                name: 'Angular',
                size: '45%',
                description: 'I\'ve done a couple projects with Angular, and although I\'m still learning, I\'m generally pretty comfortable. I know how to use Angular to follow MVC principles.',
                proficiency: 'Familiar'
            },
            {
                icon: '/assets/img/icons/mongo.png',
                name: 'Mongodb',
                size: '25%',
                description: 'I\'ve used Mongodb as a database for my last couple projects, and in conjunction with Mongoose, I am familiar with how to store and retrieve data using schemas.',
                proficiency: 'Familiar'
            },
            {
                icon: '/assets/img/icons/sass.png',
                name: 'Sass',
                size: '45%',
                description: 'I\'ve done a lot of work with Sass. I have a familiarity with CSS3 standards in general, and know how to use Sass to organize and modularize stylesheets.',
                proficiency: 'Experienced'
            },
            {
                icon: '/assets/img/icons/unity.png',
                name: 'Unity',
                description: 'My work with Unity has been fun, although infrequent and little. I am still learning a lot, but I can use Blender to create basic models, and C# to implement mechanics',
                proficiency: 'Some experience'
            },
        ],
        physical: [
            {
                name: 'Sketching',
                id: 'sketching'
            },
            {
                name: 'CAD',
                id: 'cad'
            },
            {
                name: 'Prototyping',
                id: 'prototyping'
            },
            {
                name: 'Model Making',
                id: 'model'
            },
            {
                name: 'Illustrator',
                id: 'illustrator'
            }
        ]
    }

    var physicalTabIndex = 2;

    $scope.isPhysicalTabSelected = function isPhysicalTabSelected(index) {
        return index == physicalTabIndex;
    }

    $scope.getView = function getView(index) {
        return $scope.skills.physical[index].id;
    }

    $scope.physicalTabSwitch = function physicalTabSwitch(index) {
        physicalTabIndex = index;
    }
}]);
