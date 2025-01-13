const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));
const tabActive = document.querySelector('.tab_active');

const findTab = tabs.findIndex((tabActive) => {
	tabActive.addEventListener('click', (e) => {
		findTab.findIndex((tabActive) => {
		tabActive.classList.add('tab_active');
		tabsContent.classList.add('tab__content_active');
		tabActive.classList.remove('tab_active');
		tabsContent.classList.remove('tab__content_active')

	})
})
})
	