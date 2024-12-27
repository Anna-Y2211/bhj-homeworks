const rotator = Array.from(document.querySelectorAll('.rotator__case'));
const rotatorActive = document.querySelector('.rotator__case_active');

const intervalRotate = setInterval(() => {
    rotator.forEach((el) => {
        el.classList.add('rotator__case_active');
    })
    if(!rotator) {
        clearInterval(intervalRotate);
    }
}, 1000)