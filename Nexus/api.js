/* =====================================================
   API.JS — a diferencia de productos-datos.js (datos fijos que
   nosotros escribimos), esto pide información REAL a internet
   usando la API pública y gratuita de FreeToGame
   (https://www.freetogame.com/api-doc), que no requiere registro
   ni API key.

   Conceptos nuevos:
   - fetch(): pide datos a una URL, devuelve una Promise
   - async / await: forma moderna de esperar una Promise sin usar .then()
   - try / catch: si internet falla o la API no responde, no rompemos
     la página — mostramos un mensaje en español en su lugar
   ===================================================== */

const estadoEl = document.getElementById("gratis-estado");
const gridEl = document.getElementById("gratis-grid");

// Arma UNA tarjeta a partir de un juego que vino de la API.
// Usamos textContent para el texto (no innerHTML) porque estos datos
// vienen de fuera de nuestro sitio: es más seguro no insertarlos como HTML.
function crearTarjetaApi(juego) {
  const a = document.createElement("a");
  a.href = juego.game_url;
  a.target = "_blank"; // abre en pestaña nueva: estamos mandando al usuario fuera de NEXUS//GAMING
  a.rel = "noopener noreferrer"; // evita que esa pestaña nueva pueda acceder a esta página
  a.className = "api-card";

  a.innerHTML = `
    <img class="api-card__imagen" alt="">
    <div class="api-card__cuerpo">
      <div class="api-card__fila">
        <span class="badge"></span>
        <span class="api-card__plataforma"></span>
      </div>
      <h3 class="api-card__nombre"></h3>
      <p class="api-card__desc"></p>
      <span class="api-card__link">Jugar Gratis ↗</span>
    </div>
  `;

  a.querySelector(".api-card__imagen").src = juego.thumbnail;
  a.querySelector(".api-card__imagen").alt = juego.title;
  a.querySelector(".badge").textContent = juego.genre;
  a.querySelector(".api-card__plataforma").textContent = juego.platform;
  a.querySelector(".api-card__nombre").textContent = juego.title;
  a.querySelector(".api-card__desc").textContent = juego.short_description;

  return a;
}

async function cargarJuegosGratis() {
  try {
    // ?platform=pc&sort-by=popularity le pide a la API juegos de PC ordenados por popularidad
    const respuesta = await fetch("https://www.freetogame.com/api/games?platform=pc&sort-by=popularity");

    if (!respuesta.ok) {
      throw new Error(`La API respondió con estado ${respuesta.status}`);
    }

    const juegos = await respuesta.json();

    // Solo mostramos los primeros 6 para no saturar la sección
    juegos.slice(0, 6).forEach((juego) => gridEl.append(crearTarjetaApi(juego)));
    estadoEl.hidden = true;
  } catch (error) {
    // Si no hay internet, la API está caída, o bloquea la petición, caemos aquí
    console.error("No se pudieron cargar los juegos de FreeToGame:", error);
    estadoEl.textContent = "No se pudieron cargar los juegos en vivo en este momento. Intenta de nuevo más tarde.";
  }
}

cargarJuegosGratis();
