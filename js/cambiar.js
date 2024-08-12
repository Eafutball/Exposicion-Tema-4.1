document.addEventListener("DOMContentLoaded", () => {
    const elemento = document.getElementById("texto");
    if (elemento) {
        console.log('Elemento encontrado:', elemento);

        function cambiar() {

            setTimeout(() => {
                elemento.classList.remove("animate_bounceInRight");

                elemento.classList.add("animate_bounceOut");

            }, 300);
        }

        cambiar();
    } else {
        console.warn('Elemento con ID "texto" no encontrado.');
    }
});
