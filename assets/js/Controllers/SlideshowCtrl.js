ninja.controller('SlideshowCtrl', function($scope, $window, $document, $interval, Data) {
    var slide = 0;
    $scope.currSlide;
    var skillName;
    var slideCount;
    $scope.marginLeft;

    $scope.setSkill = function setSkill(id) {
        skillName = id;
        slideCount = getSkill(skillName).data.length
        startTicker();
        changeSlide(slide);
    }

    function getSkill(id) {
        for(var i = 0; i < Data.skills.length; i++) {
            if(Data.skills[i].id == id) {
                return Data.skills[i];
            }
        }
    }
    $scope.getCaption = function getCaption(i) {
        return getSkill(skillName).data[i].title;
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
