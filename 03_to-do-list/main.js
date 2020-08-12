window.addEventListener('DOMContentLoaded', function(){
  const closeCheck = document.querySelectorAll('li');
  for(var i=0; i<closeCheck.length; i++){
    closeCheck[i].addEventListener('click', function(){
      this.classList.toggle('checked')
    });
};
  const list = document.querySelectorAll('.close')
  for(var i=0; i<list.length; i++){
  list[i].addEventListener('click', function(){
    this.parentNode.remove();
  });
  };
  const createBtn = document.querySelector('.addBtn')

  createBtn.addEventListener('click', function(){
    const createList = document.createElement('li')
    const createSpan = document.createElement('span')

    createList.textContent = document.getElementById('input').value
    createSpan.textContent = 'x'
    createSpan.className = 'close'

    document.querySelector('ul').appendChild(createList)
    createList.appendChild(createSpan)
   
  const closeCheck = document.querySelectorAll('li');
  for(var i=0; i<closeCheck.length; i++){
    closeCheck[i].addEventListener('click', function(){
      this.classList.toggle('checked')
    });
  };
  const list = document.querySelectorAll('.close')
  for(var i=0; i<list.length; i++){
  list[i].addEventListener('click', function(){
    this.parentNode.remove();
  });
  };
  })


})
