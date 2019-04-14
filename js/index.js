// Your code goes here

// Event Listener #1
const imgIntro = document.querySelector('.home .intro img');
imgIntro.addEventListener('mouseover', function(event) {
    TweenMax.to(imgIntro, 1, {x:100});
});
imgIntro.addEventListener('mouseout', function(event) {
    TweenMax.to(imgIntro, 1, {x:0});
    console.log(imgIntro);
});

// Event Listener #2
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(link => {
    link.addEventListener('mousedown', function(event) {
        link.style['color'] = 'blue';
        link.style['font-weight'] = 'bold';
    });
    link.addEventListener('mouseup', function(event) {
        link.removeAttribute('style');
    })
});

// Event Listener #3
const textContent = document.querySelectorAll('.text-content, .destination');
textContent.forEach(content => {
    content.addEventListener('dblclick', function(event) {
        content.style['border'] = '1px dashed blue';
    })
})

// Event Listener #4
const bodyTextColor = document.querySelector('body');
window.addEventListener('scroll', function(event) {
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    if (bodyTextColor.style['color'] != 'violet') {
        bodyTextColor.style['color'] = colors[colors.indexOf(bodyTextColor.style['color'])+1];
    } else {
        bodyTextColor.style['color'] = 'red';
    }
})

// Event Listener #5

// Event Listener #6

// Event Listener #7

// Event Listener #8

// Event Listener #9

// Event Listener #10