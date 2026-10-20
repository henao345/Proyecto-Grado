const boton = document.getElementById("boton");
let modoClaro = false;

boton.addEventListener("click", function () {
  if (modoClaro === false) {
    document.body.classList.add("claro");
    boton.textContent = "Volver al modo oscuro";
    modoClaro = true;
  } else {
    document.body.classList.remove("claro");
    boton.textContent = "Cambiar modo";
    modoClaro = false;
  }
});