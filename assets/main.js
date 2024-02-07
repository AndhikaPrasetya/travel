const menuOpen = document.querySelector('.menu-toggle');
const menuWrap = document.querySelector('.menu-wrapper')
menuOpen.addEventListener('click',  function() {
   menuOpen.classList.toggle('bx-x')
   menuWrap.classList.toggle('active')
})