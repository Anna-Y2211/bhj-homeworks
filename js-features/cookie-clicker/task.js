const clicker = document.getElementById('cookie');
clicker.onclick = function() {
    const counter = document.getElementById('clicker__counter');
    counter.textContent++;


if(counter.textContent % 2) {
    clicker.width = 250;
 }else {
    clicker.width = 200;
 }
}
