const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__contents'));
const tabActive = document.querySelector('.tab_active');

tabActive.addEventListener('click', () => {
	const findTabs = tabs.findIndex((tab) => {
		tabs.classList.remove(findTabs);
		tabs.classList.add('tab_active');
		tabsContent.classList.remove('tab__content_active');
		tabsContent.classList.add('tab__content_active');
})
})

	