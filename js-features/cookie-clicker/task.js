const clicker = document.getElementById('cookie');
clicker.onclick = function() {
    const counter = document.getElementById('clicker__counter');
    counter.textContent++;

    if(counter.textContent == true) {
        clicker.width = 250;
    } else {
        clicker.width = 200;
    }
}