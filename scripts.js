// Fade-in and Fade-out effect
document.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.fade');
    let windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= -100) {
            element.classList.add('fade-visible');
        } else {
            element.classList.remove('fade-visible');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let elements = document.querySelectorAll('.paragraph, .quote, .image, .horizontal-line, .horizontal-line-small');

    elements.forEach(function(element) {
        element.classList.add('fade');
    });

    let windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-visible');
        } else {
            element.classList.remove('fade-visible');
        }
    });

// Title Typing animation

    const title = document.getElementById('title');
    const text = title.textContent;
    title.textContent = ''; // Clear the current text to start typing animation
    title.style.opacity = 1;

    let index = 0;

    function typeLetter() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(typeLetter, 50); // ADJUST DELAY
        }
    }
    typeLetter();
});
