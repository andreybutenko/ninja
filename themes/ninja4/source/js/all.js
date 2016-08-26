document.querySelector('.experience-more').addEventListener("click", function(e) {
    document.querySelector('.section-experience .portfolio-section-content').classList.add('expanded');
});

var elements = document.querySelectorAll('.experience-toggle')
for(var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function(e) {
        console.log(e.target);
        e.target.parentElement.parentElement.classList.toggle('expanded');
    });
}

visualizer.init();
