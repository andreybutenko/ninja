ninja.directive('imageSizer', function() {
    return {
        restrict: 'AE',
        link: function(scope, element) {
            return;
            var images = element[0].children;
            for(var i = 0; i < images.length; i++) {
                var newId = 'image-' + Math.floor(100000 * Math.random());
                images[i].id = newId;
                var image = document.querySelectorAll('#' + newId);
                console.log(image[0].offsetWidth);
            }
        }
    };
});
