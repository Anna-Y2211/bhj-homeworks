const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));
const tabActive = document.querySelector('.tab_active');

const findTab = tabs.findIndex((tabActive) => {
	tabActive.addEventListener('click', () => {
		if(tabActive) {
			tabActive.classList.remove('tab_active');
			tabActive.classList.add('tab_active')
		}
})

})
	
