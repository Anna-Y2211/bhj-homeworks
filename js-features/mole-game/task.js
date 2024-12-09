const getHole = index => document.getElementById(`hole${index}`);
const moleDead = document.getElementById('dead');
const moleLost = document.getElementById('lost');

function winner() {
    if (moleDead.textContent == 10) {
        alert("Вы победили!");
        moleDead.textContent = 0;
        moleLost.textContent = 0;
    } else if (moleLost.textContent == 5) {
        alert("Вы приграли!");
        moleDead.textContent = 0;
        moleLost.textContent = 0;

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
