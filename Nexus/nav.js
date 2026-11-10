/* =====================================================
   NAV.JS — hace funcionar el botón hamburguesa (☰) del navbar
   en pantallas chicas. Es el mismo script en las 3 páginas:
   index.html, catalogo/catalogo.html y detalle/detalle.html.

   Qué hace: al hacer clic en el botón, le agrega/quita la clase
   "abierto" al menú (eso es lo que lo muestra/oculta — el estilo
   real vive en base.css, dentro de @media (max-width: 900px)).
   ===================================================== */

const botonToggle = document.getElementById("navbar-toggle");
const menu = document.getElementById("navbar-menu");

// En detalle.html el <header> siempre existe, así que estos elementos
// siempre deberían encontrarse — pero verificamos igual por si acaso.
if (botonToggle && menu) {
  botonToggle.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");

    // aria-expanded le dice a lectores de pantalla si el menú está abierto o no
    botonToggle.setAttribute("aria-expanded", abierto);

    // Cambiamos el ícono: ☰ (hamburguesa) cuando está cerrado, ✕ cuando está abierto
    botonToggle.textContent = abierto ? "✕" : "☰";
  });

  // Si el usuario hace clic en un link del menú (para navegar a otra
  // sección), lo cerramos — si no, quedaría abierto al cambiar de página.
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("abierto");
      botonToggle.setAttribute("aria-expanded", "false");
      botonToggle.textContent = "☰";
    });
  });
}

/* =====================================================
   TOAST — aviso flotante temporal (ver estilos en base.css).
   Lo usan: los links placeholder de abajo, el favorito de
   detalle.js y el newsletter de home.js.
   ===================================================== */
let toastTimeoutId = null;

function mostrarToast(mensaje) {
  let toast = document.getElementById("toast-global");
  if (!toast) {
    toast = document.createElement("p");
    toast.id = "toast-global";
    toast.className = "toast";
    document.body.append(toast);
  }

  toast.textContent = mensaje;
  toast.classList.add("toast--visible");

  clearTimeout(toastTimeoutId);
  toastTimeoutId = setTimeout(() => toast.classList.remove("toast--visible"), 2500);
}

/* =====================================================
   LINKS PLACEHOLDER — todo <a href="#"> que quede en el sitio
   (footer "Soporte"/"Legal", redes sociales, avatar de perfil)
   es contenido que todavía no existe. En vez de no hacer nada
   (o saltar al inicio de la página, que es lo que hace href="#"
   por defecto), avisamos con un toast.
   ===================================================== */
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();
    mostrarToast("🚧 Esta función todavía está en desarrollo.");
  });
});

/* =====================================================
   BUSCADOR DEL NAVBAR — en index.html y detalle.html (páginas
   sin grid de catálogo) buscar redirige a catalogo.html con el
   texto como parámetro ?buscar=... . En catalogo.html el filtrado
   en vivo lo maneja directamente catalogo.js (tiene acceso al grid).
   ===================================================== */
const campoBusquedaNav = document.querySelector(".navbar__buscador input");
const linkCatalogoNav = document.querySelector('.navbar__menu a[href*="catalogo.html"]');

if (campoBusquedaNav && linkCatalogoNav && !document.getElementById("catalogo-grid")) {
  campoBusquedaNav.addEventListener("keydown", (evento) => {
    if (evento.key !== "Enter") return;
    const texto = campoBusquedaNav.value.trim();
    if (!texto) return;

    const baseHref = linkCatalogoNav.getAttribute("href").split("?")[0];
    window.location.href = `${baseHref}?buscar=${encodeURIComponent(texto)}`;
  });
}

/* =====================================================
   FAVORITOS — se guardan como un array de ids de producto en
   localStorage (persiste en el navegador, no hay backend real).
   Los usan: el botón de favorito en detalle.js y el filtro
   ?favoritos=1 del catálogo en catalogo.js.
   ===================================================== */
const CLAVE_FAVORITOS = "nexus-favoritos";

function obtenerFavoritos() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_FAVORITOS)) || [];
  } catch {
    return [];
  }
}

function esFavorito(id) {
  return obtenerFavoritos().includes(id);
}

// Agrega o quita el id de la lista y devuelve el nuevo estado (true = quedó marcado)
function alternarFavorito(id) {
  const favoritos = obtenerFavoritos();
  const indice = favoritos.indexOf(id);

  if (indice === -1) {
    favoritos.push(id);
  } else {
    favoritos.splice(indice, 1);
  }

  localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(favoritos));
  return indice === -1;
}
