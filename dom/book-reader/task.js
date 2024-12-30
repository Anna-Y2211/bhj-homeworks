const book = document.querySelector('book');
const fontSize = Array.from(document.querySelectorAll('.font-size'));

fontSize.forEach((el) => {
    el.addEventListener('click', (e) => {
        fontSize.forEach((element) => {
        e.classList.remove('.font-size_active');
     })
     el.classList.add('rotator__case_active')
    })
})