// Your code goes here

// Event Listener #1
const title = document.querySelector('header h1');
title.addEventListener('mouseover', function(event) {
    TweenMax.to(title, 1, {x:100});
});
title.addEventListener('mouseout', function(event) {
    TweenMax.to(title, 1, {x:0, y:0});
    console.log(title);
});

// Event Listener #2
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(link => {
    link.addEventListener('mousedown', function(event) {
        event.preventDefault();
        link.style['color'] = 'blue';
        link.style['font-weight'] = 'bold';
    });
    link.addEventListener('mouseup', function(event) {
        event.preventDefault();
        link.removeAttribute('style');
    });
});

// Event Listener #3
const textContent = document.querySelectorAll('.text-content, .destination');
textContent.forEach(content => {
    content.addEventListener('dblclick', function(event) {
        content.style['border'] = '1px dashed blue';
    });
});

// Event Listener #4
const bodyTextColor = document.querySelector('body');
window.addEventListener('scroll', function(event) {
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    if (bodyTextColor.style['color'] != 'violet') {
        bodyTextColor.style['color'] = colors[colors.indexOf(bodyTextColor.style['color']) + 1];
    } else {
        bodyTextColor.style['color'] = 'red';
    };
});

// Event Listener #5
const image = document.querySelectorAll('img');
image.forEach(img => {
    img.addEventListener('mouseover', function(event) {
        img.style.transition = "opacity 1s linear";
        img.style.opacity = 0;
    });
    img.addEventListener('mouseout', function(event) {
        img.style.opacity = 1;
    });
});

// Event Listener #6
image.forEach(img => {
    img.addEventListener('dblclick', function(event) {
        img.style.display = 'none';
    });
});

// Event Listener #7
title.addEventListener('click', function(event) {
    TweenMax.to(title, 2, {x:getRandom(100), y:getRandom(100)});
});

function getRandom(var1) {
    return Math.floor(Math.random()*var1);
};

// Event Listener #8
const footer = document.querySelector('footer p');
footer.addEventListener('dblclick', function(event) {
    if (footer.style['font-size'] === '1.6rem') {
        footer.style['font-size'] = '2.6rem';
    } else {
        footer.style['font-size'] = '1.6rem';
    };
});

// Event Listener #9
const textParagraph = document.querySelectorAll('p');
textParagraph.forEach(textArea => {
    textArea.addEventListener('cut', function(event) {
        textArea.innerHTML = textArea.innerHTML.replace(window.getSelection().toString(), '_'.repeat(window.getSelection().toString().length));
    });
});

// Event Listener #10
bodyTextColor.addEventListener('keypress', function(event) {
    if (event.key === 'f') {
        bodyTextColor.style['color'] = 'black';
    };
});