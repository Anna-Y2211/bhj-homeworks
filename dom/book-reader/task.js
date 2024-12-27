const book = document.querySelector('book');
const fontSize = Array.from(document.querySelectorAll('.font-size'));

fontSize.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.classList.add('.font-size_active')
    })
})