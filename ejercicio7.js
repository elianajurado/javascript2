let contador = 0;

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton')

botones.forEach(boton => {
  boton.addEventListener('click', function(e) {

    const estilos = e.currentTarget.classList;

    if(estilos.contains('dec')) {
      contador--;
      alert("dec");
    }
    else if(estilos.contains('inc')) {
      contador++;
      alert("inc");
    }
    else {
      contador = 0;
      alert("reset");
    }
      valor.textContent = contador;

      // vamos a cambiar los colores 

      if(contador > 0) {
        valor.style.color = '#fff';
      }
      if(contador < 0) {
        valor.style.color = '#ba215a';
      }
  })
})