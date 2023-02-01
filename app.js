let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(value);
    stars.style.left = value + 'px';
});
