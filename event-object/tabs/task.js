const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));
let tabActive = document.querySelector('.tab_active');
let activeContent = document.querySelector('.tab__content_active');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
	  let indexTab = tabs.findIndexf((el) => {
		el.classList.remove('tab_active')
		indexTab.classList.remove('tab_active')
		tab.classList.add('tab_active')
		indexTab.classList.add('tab_active')
	  });
	  //
	 // tabActive.classList.remove[indexTab];
	  //tabActive.classList.add('tab_active');
  
	  //activeContent.classList.remove('tab__content_active');
	  //activeContent = tabsContent[indexTab];
	  //activeContent.classList.add('tab__content_active');
	});
  });
