const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = document.querySelectorAll('.tab__content');


tabs.forEach((tab, ind) => {
  tab.addEventListener('click', () => {
const indexTab = tabs.findIndex((element) => {
     if(element.classList.contains('tab_active')){
     return true
     }else{
       return false
 }
})
   tabs[indexTab].classList.remove('tab_active')
   tabsContent[indexTab].classList.remove('tab__content_active')
  tab.classList.add('tab_active')
   tabsContent[ind].classList.add('tab__content_active')
 })
})
