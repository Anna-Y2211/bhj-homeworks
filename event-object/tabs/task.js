const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content')

	tabs.forEach(function(tab, i) {
		tab.onclick = () => {
			if (!tab.classList.contains('tab_active')) {
				for (let i = 0; i < tabs.length; i++) {
					tabs[i].classList.remove('tab_active');
					tabsContent[i].classList.remove('tab__content_active');
				}
				tab.classList.add('tab_active');
				tabsContent[i].classList.add('tab__content_active')
			}
		}
	})
