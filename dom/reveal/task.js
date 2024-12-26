const reveal = Array.from(document.querySelectorAll('.reveal'));

window.getEventListener('scroll', () => {
    reveal.findIndex((el) => {
        const {top, bottom} = el.getBoundingClientRect();
    if(top > window.innerHeight && bottom < 0) {
        el.classList.add('.reveal_active');
    }
    })
})
