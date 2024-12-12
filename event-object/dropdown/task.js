const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownList.addEventListener('click', () => {
   if(dropdownItem.classList.contains(('dropdown__list_active') == true)) {
     dropdownItem.classList.remove('dropdown__list_active');
 } else {
   dropdownItem.classList.add('dropdown__list_active')
 }
});
 
   const dropdownLinks = document.querySelectorAll('.dropdown__link');
    dropdownLinks.addEventListener('click', (event) => {
      event.preventDefault();
 });
 const dropdownValue = document.querySelector('.dropdown__value');
   dropdownValue.addEventListener('click', () => {
       dropdownLinks.textContent =  dropdownValue.textContent
 });
