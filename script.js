let btnmenu=document.getElementById('menu');
let navlinks=document.querySelector('.list');
btnmenu.addEventListener('click',function(){

  btnmenu.classList.toggle('fa-times');
  navlinks.classList.toggle('active')

})