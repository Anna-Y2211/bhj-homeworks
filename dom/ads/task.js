
const rotatorCase = document.querySelectorAll('.rotator__case');
let count = 0;

function rotator () {
    count++;
    if(count == rotatorCase.length) {
        rotatorCase[count - 1].classList.remove('rotator__case_active');
        count = 0;
    } else {
        rotatorCase[count - 1].classList.remove('rotator__case_active');
    }
    rotatorCase[count].classList.add('rotator__case_active');
}
setInterval(rotator, 1000);




