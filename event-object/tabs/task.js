const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content')

tabs.addEventListener('click', () => {
	tabs.findIndex('tab_active');
	tabs.classList.remove('tab_active');
	tabs.classList.add('tab_active');
	tabsContent.classList.remove('tab__content_active');
	tabsContent.classList.add('tab__content_active');
})