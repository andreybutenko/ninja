function initAnimation() {
    var ele = document.querySelector('#visualizerCanvas');
    visualizer.init();

    ele.classList.add('reset');
    ele.style.transform = 'translate3d(0px, 0px)';

    setTimeout(showAnimation, 0);
}

function showAnimation() {
    var ele = document.querySelector('#visualizerCanvas');
        ele.classList.remove('reset');
    ele.classList.add('in');
    var transform = generateTransform();
    ele.style.transform = transform;
    ele.style.opacity = 1;
    setTimeout(hideAnimation, 7000);
}

function hideAnimation() {
    var ele = document.querySelector('#visualizerCanvas');
    ele.classList.remove('in');
    ele.style.opacity = 0;
    setTimeout(initAnimation, 2000);
}

function generateTransform() {
    var offsetX = random(-150, 150);
    var offsetY = random(-150, 150);

    return 'translate3d(' + offsetX + 'px, ' + offsetY + 'px, 0px)'
}
