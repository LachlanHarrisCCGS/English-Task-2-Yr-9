// Fade-in and Fade-out effect
document.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.fade');
    let windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-visible');
        } else {
            element.classList.remove('fade-visible');
        }
    });
});

// Apply fade class to each element on load
document.addEventListener('DOMContentLoaded', function() {
    let elements = document.querySelectorAll('.paragraph, .quote, .image');

    elements.forEach(function(element) {
        element.classList.add('fade');
    });
});