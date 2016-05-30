ninja.controller('SlideshowCtrl', function($scope, $window, $document, $interval, Data) {
    var slide = 0;
    $scope.currSlide;
    var skillName;
    var slideCount;
    $scope.marginLeft;
    var isProject = false;

    $scope.setSkill = function setSkill(id) {
        skillName = id;
        if(!getSkill(skillName).hasOwnProperty('slides')) {
            slideCount = 0;
            return;
        }
        slideCount = getSkill(skillName).slides.length;
        startTicker();
        changeSlide(slide);
    }

    $scope.setProject = function setProject(id) {
        isProject = true;
        $scope.setSkill(id);
    }

    $scope.isEmptySlideshow = function isEmptySlideshow() {
        return slideCount == 0;
    }

    function getSkill(id) {
        if(isProject) {
            for(var i = 0; i < Data.projects.length; i++) {
                if(Data.projects[i].id == id) {
                    return Data.projects[i];
                }
            }
        }
        else {
            for(var i = 0; i < Data.skills.length; i++) {
                if(Data.skills[i].id == id) {
                    return Data.skills[i];
                }
            }
        }
    }
    $scope.getSkill = getSkill;
    $scope.getCaption = function getCaption(i) {
        return getSkill(skillName).slides[i].title;
    }

    $scope.asdf = function asdf() {
        return { asdf: ['asdf'] }
    }

    $interval(function() {
        if(!stopped) {
            nextSlide();
        }
        if(startNextCycle) {
            stopped = false;
        }
    }, 4000);
    var stopped = false;
    var startNextCycle = false;
    function startTicker() {
        startNextCycle = true;
    }
    function stopTicker() {
        stopped = true;
    }
    $scope.startTicker = startTicker;
    $scope.stopTicker = stopTicker;

    function changeSlide(newSlide) {
        slide = newSlide;
        $scope.marginLeft = '-' + (slide * 100) + '%';
        $scope.currSlide = slide;
    }
    function prevSlide() {
        if(slide - 1 < 0) {
            changeSlide(slideCount - 1);
        }
        else {
            changeSlide(slide - 1);
        }
    }
    function nextSlide() {
        if(slide + 1 >= slideCount) {
            changeSlide(0);
        }
        else {
            changeSlide(slide + 1);
        }
    }
    $scope.changeSlide = function(newSlide) { stopTicker(); startTicker(); changeSlide(newSlide); }
    $scope.nextSlide = function() { stopTicker(); startTicker(); nextSlide(); }
    $scope.prevSlide = function() { stopTicker(); startTicker(); prevSlide(); }

/*
    $scope.$watch(function(){
        return $window.innerWidth;
    }, function(value) {
        recalculateSlideSize();
    });

    function recalculateSlideSize() {
        var viewOffset = $document[0].querySelector('.skill-view-selected').offsetTop;
        console.log(viewOffset);
        var viewWidth = $document[0].querySelector('.skill-view-selected').offsetWidth;
        var windowHeight = $window.innerHeight;
    }*/
});
