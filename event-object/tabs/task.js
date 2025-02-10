const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = document.querySelectorAll('.tab__content');
const tabActive = document.querySelector('.tab_active');
const activeContent = document.querySelector('.tab__content_active');


tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
  let indexTab = tabs.findIndex((tabActive) => {
  tabActive.classList.remove('tab_active');
  tab.classList.add('tab_active') 
   
    tabActive.classList.remove('tab__content_active')
    tab.classList.add('tab__content_active')
    
    
})
  
})
})  