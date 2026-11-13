const inputOperacion = document.getElementById("operacion");
const botonValidar = document.getElementById("btnValidar");
const mensajeResultado = document.getElementById("mensajeResultado");

const patronOperacion = /^\s*[+-]?(?:\d+(?:\.\d*)?|\.\d+)\s*[+*/-]\s*[+-]?(?:\d+(?:\.\d*)?|\.\d+)\s*$/;

botonValidar.addEventListener("click", () => {
  try {
    if (!patronOperacion.test(inputOperacion.value)) {
      throw new Error("La operación no tiene un formato válido.");
    }

    mensajeResultado.textContent = "La operación es correcta.";
  } catch (error) {
    console.error(error);
    mensajeResultado.textContent = error.message;
  }
});
