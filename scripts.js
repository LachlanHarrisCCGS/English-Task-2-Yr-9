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

    let title = document.getElementById('title');
    let text = title.textContent;
    title.textContent = ''; // Clear the current text to start typing animation
    title.style.opacity = 1;

    let index = 0;

    let done = false;

    function typeLetter() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(typeLetter, 60); // ADJUST DELAY
        }
        else if (!done) {
            title = document.getElementById('title2');
            text = title.textContent;
            title.textContent = ''; // Clear the current text to start typing animation
            title.style.opacity = 1;

            index = 0;
            done = true;
            setTimeout(typeLetter, 250);
        }
    }
    typeLetter();
});



