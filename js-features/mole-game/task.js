const getHole = index => document.getElementById(`hole${index}`);
const moleDead = document.getElementById('dead');
const moleLost = document.getElementById('lost');

function winner() {
    if (moleDead == 10) {
        alert("Вы победили!");
    } else if (moleLost == 5) {
        alert("Вы приграли!");
    }
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.classList.contains('hole_has-mole')) {
            moleDead.textContent++;
        } else {
            moleLost.textContent++;
        }
        winner()
    }
}
