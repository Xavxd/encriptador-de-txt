//limpiar el area de texto 1
function limpiarTextarea() {
  document.getElementById("input1").value = "";
}

function encriptar () {
    //comprueba si no obtuvo un valor para poner una alerta
     var text = document.getElementById("input1").value;
     if(text.trim() === "") {
       alert("please write a message for start");
       return;
     }
  
      //encripta el mensaje en el input
       var text = document.getElementById("input1").value
        .replace("a" , "4xa")
        .replace("e" , "3ed")
        .replace("i" , "1ni")
        .replace("o" , "0os")
        .replace("u" , "9uh");

        //le pasa el mensaje encriptado al segundo cuadro de texto
        document.getElementById("result").value = text;
        
        //limpia el texto del textarea
        limpiarTextarea();
 }

 //función para desencriptar el texto
  function desencriptar (){

    //comprueba si no obtuvo un valor para poner una alerta
    var texts = document.getElementById("input1").value;
    if(texts.trim() === "") {
      alert("please write a message for start");
      return;
    }

    let text = document.getElementById("input1").value
        .replace("4xa" , "a")
        .replace("3ed" , "e")
        .replace("1ni" , "i")
        .replace("0os" , "o")
        .replace("9uh" ,  "u");

       //le pasa el texto desencriptado al resultado 
       document.getElementById("result").value = text;

 }


 //limpiar area del resultado
  function limpiarTextarea2() {
  document.getElementById("result").value = "";
 }


 //boton para hacer que copie el texto del resultado

//primero carga todo el documento  
document.addEventListener("DOMContentLoaded", function() {

    //asigna a variables el texto a copiar y el boton
    const copyBtn = document.getElementById('copy-btn');
    const textToCopy = document.getElementById('result');
  
    //recibe la acción al dar un click
    copyBtn.addEventListener('click', () => {
  
      //copia el texto del cuadro de texto
        navigator.clipboard.writeText(textToCopy.value)

          //si el texto se copio correctamente ejecuta el metodo 'then'
          .then(() => {
            console.log('Texto copiado al portapapeles');
          })

          //si tiene un error entoncer ejecuta el metodo 'catch'
          .catch((err) => {
            console.error('Error al copiar texto: ', err);
          });

          //limpia el texto del textarea
          limpiarTextarea2();
      });
  });
  


