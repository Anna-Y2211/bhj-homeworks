const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = document.querySelectorAll('.tab__content');
const tabActive = document.querySelector('.tab_active');
const activeContent = document.querySelector('.tab__content_active');


tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
   const indexTab = tabs.findIndex((element) => element == tabActive)
       tab.classList.remove('tab_active')
       indexTab.classList.add('tab_active')
    
})
  
})
