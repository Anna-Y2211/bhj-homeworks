const form = document.querySelector('form');
const btn = document.querySelector('.tasks__add');
const list = document.getElementById('tasks__list');
const input = document.querySelector('.tasks__input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
})
btn.addEventListener('click', () => {
  let newDiv = document.createElement('div');
  if(input.value) {
  newDiv.innerHTML = `<div class="task">
  <div class="task__title">
    ${input.value}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>`
  list.appendChild(newDiv);
  input.value = '';
  const remove = newDiv.querySelector('.task__remove');
  remove.addEventListener('click', () => {
    
    newDiv.remove()
  
  })
  }
})