var elements = document.querySelectorAll('.experience-toggle')
for(var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function(e) {
        console.log(e.target);
        e.target.parentElement.parentElement.classList.toggle('expanded');
    });
}
