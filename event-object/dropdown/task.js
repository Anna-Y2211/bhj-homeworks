const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLinks = Array.from(document.querySelectorAll('.dropdown__link'));

dropdownValue.addEventListener('click', () => {
	dropdownList.classList.toggle('dropdown__list_active');
});

dropdownLinks.forEach(element => {
	element.addEventListener('click', (event) => {
		event.preventDefault();
		dropdownList.classList.remove('dropdown__list_active');
		dropdownValue.textContent = event.currentTarget.textContent;
	});
});