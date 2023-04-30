document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('boton_open');
    const main = document.querySelector('.cards_container'); 
  
    btn.addEventListener('click', ()=>{
      main.classList.toggle('cards_container--active');
  
      if (main.classList.contains('cards_container--active')) {
        btn.textContent = 'close encripter';
      } else {
        btn.textContent = 'open encripter';
      }

        // Crear una cookie y agregar el atributo SameSite
        document.cookie = "cookie=cookie_value; SameSite=Lax";

    })
    
  });