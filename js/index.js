// Your code goes here

// Event Listener #1
const imgIntro = document.querySelector('.home .intro img');
imgIntro.addEventListener('mouseover', function() {
    TweenMax.to(imgIntro, 1, {x:100});
});
imgIntro.addEventListener('mouseout', function() {
    TweenMax.to(imgIntro, 1, {x:0});
    console.log(imgIntro);
});

// Event Listener #2
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(link => {
    link.addEventListener('mousedown', function() {
        link.style['color'] = 'blue';
        link.style['font-weight'] = 'bold';
    });
    link.addEventListener('mouseup', function() {
        link.removeAttribute('style');
    })
});

// Event Listener #3

// Event Listener #4

// Event Listener #5

// Event Listener #6

// Event Listener #7

// Event Listener #8

// Event Listener #9

// Event Listener #10