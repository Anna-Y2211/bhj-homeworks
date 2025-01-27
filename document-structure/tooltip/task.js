const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach((el) => {
  let newDiv = document.createElement('div');
  newDiv.textContent = String(el.title);
  newDiv.classList.add('tooltip');
  el.appendChild(newDiv);
  const eCoordinat = el.getBoundingClientRect();
  let left = Math.round(eCoordinat.left)
  el.addEventListener('click', (e) => {
    e.preventDefault();
    newDiv.classList.toggle('tooltip_active');
   newDiv.style.cssText = `left: ${left}px`
    
  })
 
})