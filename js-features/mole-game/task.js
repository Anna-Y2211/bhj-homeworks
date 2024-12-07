const holes = document.getElementsByClassName('hole');
const moleDead = document.getElementById('dead');
const moleLost = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

for(let i = 0; i <= 9; i++) {
    getHole(i).onclick = function() {
        if(holes.className.includes('hole_has-mole')) {
            moleDead.textContent++;
        } else {
            moleLost.textContent++;
        }
    }
}
function winner() {
    if(moleDead == 10) {
        alert('Вы победили!');
    } else if(moleLost == 5) {
        alert('Вы проиграли')
    }
}