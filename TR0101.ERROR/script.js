const btnErrorCodigo = document.getElementById('btnErrorCodigo');
const btnErrorOpcion = document.getElementById('btnErrorOpcion');
const inputOpcion = document.querySelector('input');
const mensajeError = document.getElementById('mensajeError');

btnErrorCodigo.addEventListener('click', () => {
	try {
		funcionInexistente();
	} catch (error) {
		console.error(error);
		mensajeError.textContent = 'Se produjo un error interno al ejecutar el código.';
	}
});

btnErrorOpcion.addEventListener('click', () => {
	try {
		const opcion = inputOpcion.value;

		if (opcion.trim() === '' || isNaN(opcion)) {
			throw new Error('Opción no válida');
		}
	} catch (error) {
		console.error(error);
		mensajeError.textContent = error.message;
	}
});
