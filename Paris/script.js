// Animación de aparición al hacer scroll
const cards = document.querySelectorAll('.card');

function mostrarCards() {
    const ventana = window.innerHeight;

    cards.forEach(card => {
        const posicion = card.getBoundingClientRect().top;
        if (posicion < ventana - 50) {
            card.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', mostrarCards);
mostrarCards();
