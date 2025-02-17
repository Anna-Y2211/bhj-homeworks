const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = document.querySelectorAll('.tab__content');
//const tabActive = document.querySelector('.tab_active');
//const activeContent = document.querySelector('.tab__content_active');



tabs.forEach((tab) => {
   tab.addEventListener('click', () => {
  
const indexTab = tabs.findIndex((element) => {
  if(element.classList.contains('tab_active')) {
    return true
  }else{
    return false
  }
})
indexTab.classList.remove('tab_active')
tabsContent.classList.remove('tab__content_active')  
tab.classList.add('tab_active')
tab.classList.add('tab__content_active')
   })
  })
  