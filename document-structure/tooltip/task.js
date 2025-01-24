const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach((el) => {
  let newDiv = document.createElement('div');
  newDiv.textContent = String(el.title);
  newDiv.classList.add('tooltip');
  el.appendChild(newDiv);
  el.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(newDiv);
    newDiv.classList.toggle('tooltip_active');
    
  })
 
})