
  setTimeout(function() {
    alert('Bienvenidos al mundo Digimon');
  }, 1000);
  

  const boton = document.getElementById("miBoton");

boton.addEventListener("click", function() {
  if (boton.disabled) {
    return;
  } else {
    alert("¡Gracias!");
  }
});
