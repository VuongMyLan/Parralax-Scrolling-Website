let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    moon.style.top = value * 1.05 + 'px';
    console.log(value, moon.style.top);
    stars.style.left = value * 0.25 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    console.log(value, mountains_behind.style.top);
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 2 + 'px';
    header.style.top = value * 0.5 + 'px';
});
