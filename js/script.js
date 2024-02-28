// document.addEventListener('DOMContentLoaded', function() {



  function burger(){
    var burger = document.getElementById('burger');
    var links = document.getElementById('links')
    var clear = document.getElementById('clear');
    burger.style.padding = '16px 16px 200vw 200vw';
    links.style.display = 'flex';
    clear.style.display = 'inline';
  }


  function quit(){
    var burger = document.getElementById('burger')
    var clear = document.getElementById('clear')
    burger.style.padding = '16px 16px 32px 32px';
    clear.style.display = 'none';
  } 
// });