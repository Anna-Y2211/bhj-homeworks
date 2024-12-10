const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownValue.addEventListener('click', () => {
   dropdownList.classList.toggle('dropdown__list_active')
})

dropdownItem.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active')
 })

