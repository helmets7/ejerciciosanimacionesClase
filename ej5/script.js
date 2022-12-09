const boton = document.querySelector(".boton");
const imagenpelota = document.querySelector(".imagenpelota");

boton.addEventListener("click", () => {
    imagenpelota.classList.toggle("animar");
});

    