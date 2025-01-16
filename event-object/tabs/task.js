const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));
const tabActive = document.querySelector('.tab_active');
const activeContent = document.querySelector('.tab__content_active');

const findTabs = tabs.forEach((el) => {
	el.addEventListener('click', () => {
	const active = tabs.findIndex((tabActive) => {
	tabActive.classList.remove('tab_active');
	active.classList.remove('tab_active')

	})
	el.classList.add('tab_active')
})
})
