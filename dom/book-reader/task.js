const book = document.querySelector('.book__content');
const fontSize = document.querySelectorAll('.font-size');

const clickFont = (event) => {
    event.preventDefault();
    fontSize.forEach((element) => {
        element.classList.remove('font-size_active');
    })
    const currentElement = event.target;
    currentElement.classList.add('font-size_active');
    book.classList.remove('font-size_small', 'font-size_big');
    const size = currentElement.dataset.size;
    if(size) {
        book.classList.add(`font-size-${size}`);
    }
};
fontSize.forEach((element) => {
    element.addEventListener('click', clickFont)
})