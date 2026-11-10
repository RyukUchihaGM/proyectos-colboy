/* =====================================================
   CATALOGO.JS — arma el grid de productos a partir de
   PRODUCTOS (productos-datos.js) y hace funcionar TODOS los
   controles del sidebar de filtros + la barra de orden/vista.

   Idea clave: el grid NUNCA se escribe a mano en el HTML. Cada vez
   que cambia cualquier filtro (categoría, plataforma, género, año,
   valoración, búsqueda, orden o favoritos), se vuelve a construir
   desde cero llamando a renderizar().

   Las funciones obtenerFavoritos()/esFavorito()/alternarFavorito()
   vienen de nav.js (se carga antes que este archivo en catalogo.html).
   ===================================================== */

const grid = document.getElementById("catalogo-grid");
const contador = document.getElementById("contador-resultados");
const sinResultados = document.getElementById("sin-resultados");

const checksCategoria = document.querySelectorAll('#filtro-categoria input[type="checkbox"]');
const checksPlataforma = document.querySelectorAll('#filtro-plataforma input[type="checkbox"]');
const checksGenero = document.querySelectorAll('#filtro-genero input[type="checkbox"]');

const inputBuscador = document.querySelector(".navbar__buscador input");

const rangoMin = document.getElementById("rango-anio-min");
const rangoMax = document.getElementById("rango-anio-max");
const anioValorTexto = document.getElementById("anio-valor-texto");

const botonesValoracion = document.querySelectorAll("#valoracion-filtro button");
const valoracionTexto = document.getElementById("valoracion-texto");

const btnOrden = document.getElementById("btn-orden");
const ordenTexto = document.getElementById("orden-texto");
const btnVistaGrid = document.getElementById("vista-grid");
const btnVistaLista = document.getElementById("vista-lista");

// Estado que no vive en un checkbox/input del HTML
let valoracionMinima = 0; // 0 = sin filtro de valoración
let ordenActual = "relevancia";
let soloFavoritos = false;

const OPCIONES_ORDEN = [
  { valor: "relevancia", texto: "Relevancia" },
  { valor: "precio-asc", texto: "Precio: Menor a Mayor" },
  { valor: "precio-desc", texto: "Precio: Mayor a Menor" },
  { valor: "valorados", texto: "Mejor Valorados" },
  { valor: "alfabetico", texto: "Alfabético (A-Z)" },
];

// Construye el string de estrellas, ej: "★★★★" + una gris al final para 4.x
function crearEstrellasTexto(rating) {
  const llenas = Math.round(rating);
  const vacias = 5 - llenas;
  const spanVacias = vacias > 0 ? `<span class="rating__vacia">${"★".repeat(vacias)}</span>` : "";
  return `${"★".repeat(llenas)}${spanVacias} <b>${rating.toFixed(1)}</b>`;
}

// Texto corto bajo el nombre, ej: "Multi • 2011" — combina plataformas + año de lanzamiento
function crearMetaCorta(producto) {
  const anio = (producto.meta.find((m) => m.label === "Lanzamiento") || {}).value || "";
  const plataforma = producto.plataformas.length >= 3 ? "Multi" : producto.plataformas.slice(0, 2).join(" / ");
  return `${plataforma} <span class="punto"></span> ${anio}`;
}

function crearTarjeta(id, producto) {
  const article = document.createElement("article");
  article.className = `tarjeta-producto tarjeta-producto--${producto.acento}`;
  article.innerHTML = `
    <img class="tarjeta-producto__img" src="${producto.imagen}" alt="${producto.nombre}">
    <div class="tarjeta-producto__cuerpo">
      <div class="tarjeta-producto__fila">
        <span class="badge">${producto.categoria}</span>
        <span class="rating">${crearEstrellasTexto(producto.rating)}</span>
      </div>
      <h3 class="tarjeta-producto__nombre">${producto.nombre}</h3>
      <p class="tarjeta-producto__meta">${crearMetaCorta(producto)}</p>
      <p class="tarjeta-producto__desc">${producto.descripcion.slice(0, 90)}${producto.descripcion.length > 90 ? "…" : ""}</p>
      <a href="../detalle/detalle.html?id=${id}" class="boton-ver">Ver detalles <img src="../assets/cat-icon-chevron-right.svg" alt=""></a>
    </div>
  `;
  return article;
}

// ---------- HELPERS DE FILTRADO ----------

// Lee qué casillas de un grupo están marcadas, devolviendo el valor de su data-atributo
function valoresActivos(checks, atributo) {
  return Array.from(checks)
    .filter((cb) => cb.checked)
    .map((cb) => cb.dataset[atributo]);
}

function categoriasActivas() {
  return valoresActivos(checksCategoria, "categoria");
}

// Sin casillas marcadas = no filtra por este grupo (a diferencia de "categoría",
// que siempre debe tener al menos una marcada para mostrar algo).
function coincidePlataforma(producto, plataformasSel) {
  if (plataformasSel.length === 0) return true;
  return plataformasSel.some((p) => {
    if (p === "Multiplataforma") return producto.plataformas.length >= 3;
    return producto.plataformas.some((pl) => pl.includes(p));
  });
}

function coincideGenero(producto, generosSel) {
  if (generosSel.length === 0) return true;
  return generosSel.some((g) => producto.tags.some((tag) => tag.includes(g)));
}

function coincideAnio(producto) {
  const anio = parseInt((producto.meta.find((m) => m.label === "Lanzamiento") || {}).value, 10);
  if (Number.isNaN(anio)) return true;
  return anio >= Number(rangoMin.value) && anio <= Number(rangoMax.value);
}

function coincideValoracion(producto) {
  return producto.rating >= valoracionMinima;
}

function coincideBusqueda(producto, texto) {
  if (!texto) return true;
  const t = texto.toLowerCase();
  return (
    producto.nombre.toLowerCase().includes(t) ||
    producto.descripcion.toLowerCase().includes(t) ||
    producto.tags.some((tag) => tag.toLowerCase().includes(t))
  );
}

// null = sin precio fijo todavía ("Gratuito" cuenta como 0, no como null)
function precioNumerico(producto) {
  if (!producto.precio || producto.precio === "Por confirmar") return null;
  if (producto.precio === "Gratuito") return 0;
  return parseInt(producto.precio.replace(/[^\d]/g, ""), 10);
}

function ordenar(ids) {
  const arr = [...ids];
  if (ordenActual === "valorados") {
    arr.sort((a, b) => PRODUCTOS[b].rating - PRODUCTOS[a].rating);
  } else if (ordenActual === "alfabetico") {
    arr.sort((a, b) => PRODUCTOS[a].nombre.localeCompare(PRODUCTOS[b].nombre));
  } else if (ordenActual === "precio-asc" || ordenActual === "precio-desc") {
    arr.sort((a, b) => {
      const pa = precioNumerico(PRODUCTOS[a]);
      const pb = precioNumerico(PRODUCTOS[b]);
      if (pa === null && pb === null) return 0;
      if (pa === null) return 1; // sin precio siempre al final
      if (pb === null) return -1;
      return ordenActual === "precio-asc" ? pa - pb : pb - pa;
    });
  }
  // "relevancia" = se deja el orden original de PRODUCTOS, no se toca
  return arr;
}

// ---------- RENDER PRINCIPAL ----------

function renderizar() {
  const categoriasSel = categoriasActivas();
  const plataformasSel = valoresActivos(checksPlataforma, "plataforma");
  const generosSel = valoresActivos(checksGenero, "genero");
  const texto = inputBuscador ? inputBuscador.value.trim() : "";
  const favoritosGuardados = obtenerFavoritos();

  let ids = Object.keys(PRODUCTOS).filter((id) => {
    const producto = PRODUCTOS[id];
    return (
      categoriasSel.includes(producto.categoriaPlural) &&
      coincidePlataforma(producto, plataformasSel) &&
      coincideGenero(producto, generosSel) &&
      coincideAnio(producto) &&
      coincideValoracion(producto) &&
      coincideBusqueda(producto, texto) &&
      (!soloFavoritos || favoritosGuardados.includes(id))
    );
  });

  ids = ordenar(ids);

  grid.innerHTML = "";
  ids.forEach((id) => grid.append(crearTarjeta(id, PRODUCTOS[id])));

  contador.textContent = ids.length;
  sinResultados.hidden = ids.length !== 0;
  sinResultados.textContent =
    soloFavoritos && ids.length === 0
      ? "Todavía no agregaste productos a Favoritos. Hazlo desde la ficha de cada producto."
      : "No se encontraron productos con los filtros seleccionados.";
}

// ---------- CATEGORÍA / PLATAFORMA / GÉNERO ----------

checksCategoria.forEach((cb) => cb.addEventListener("change", renderizar));
checksPlataforma.forEach((cb) => cb.addEventListener("change", renderizar));
checksGenero.forEach((cb) => cb.addEventListener("change", renderizar));

// ---------- BÚSQUEDA (filtrado en vivo, mismo input del navbar) ----------

if (inputBuscador) {
  inputBuscador.addEventListener("input", renderizar);
}

// ---------- AÑO DE LANZAMIENTO (slider doble) ----------

function actualizarAnioTexto() {
  anioValorTexto.textContent = `${rangoMin.value} - ${rangoMax.value}`;
}

[rangoMin, rangoMax].forEach((input) => {
  input.addEventListener("input", () => {
    // Evita que los dos thumbs se crucen
    if (Number(rangoMin.value) > Number(rangoMax.value)) {
      if (input === rangoMin) rangoMax.value = rangoMin.value;
      else rangoMin.value = rangoMax.value;
    }
    actualizarAnioTexto();
    renderizar();
  });
});

// ---------- VALORACIÓN MÍNIMA (estrellas clicables) ----------

function actualizarValoracionUI() {
  botonesValoracion.forEach((btn) => {
    btn.classList.toggle("activa", Number(btn.dataset.valor) <= valoracionMinima);
  });
  valoracionTexto.textContent = valoracionMinima === 0 ? "cualquiera" : `${valoracionMinima}+ estrellas`;
}

botonesValoracion.forEach((btn) => {
  btn.addEventListener("click", () => {
    const valor = Number(btn.dataset.valor);
    // Clic sobre el umbral ya activo = lo apaga (vuelve a "cualquiera")
    valoracionMinima = valoracionMinima === valor ? 0 : valor;
    actualizarValoracionUI();
    renderizar();
  });
});

// ---------- ORDENAR POR (menú desplegable armado con JS) ----------

function cerrarMenuOrden() {
  document.querySelector(".selector-menu")?.remove();
  btnOrden.setAttribute("aria-expanded", "false");
}

function abrirMenuOrden() {
  const menu = document.createElement("div");
  menu.className = "selector-menu";
  OPCIONES_ORDEN.forEach((opcion) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = opcion.texto;
    boton.classList.toggle("activo", opcion.valor === ordenActual);
    boton.addEventListener("click", () => {
      ordenActual = opcion.valor;
      ordenTexto.textContent = opcion.texto;
      cerrarMenuOrden();
      renderizar();
    });
    menu.append(boton);
  });
  btnOrden.parentElement.append(menu);
  btnOrden.setAttribute("aria-expanded", "true");
}

btnOrden.addEventListener("click", (evento) => {
  evento.stopPropagation();
  document.querySelector(".selector-menu") ? cerrarMenuOrden() : abrirMenuOrden();
});

// Clic afuera del menú lo cierra
document.addEventListener("click", (evento) => {
  if (!evento.target.closest(".selector-envoltorio")) cerrarMenuOrden();
});

// ---------- VISTA: GRILLA / LISTA ----------

btnVistaGrid.addEventListener("click", () => {
  grid.classList.remove("catalogo-grid--lista");
  btnVistaGrid.classList.add("vista-boton--activo");
  btnVistaLista.classList.remove("vista-boton--activo");
});

btnVistaLista.addEventListener("click", () => {
  grid.classList.add("catalogo-grid--lista");
  btnVistaLista.classList.add("vista-boton--activo");
  btnVistaGrid.classList.remove("vista-boton--activo");
});

// ---------- LIMPIAR / APLICAR ----------

// "Limpiar" = resetea TODOS los filtros a su estado inicial
document.getElementById("btn-limpiar").addEventListener("click", () => {
  checksCategoria.forEach((cb) => (cb.checked = true));
  checksPlataforma.forEach((cb) => (cb.checked = cb.dataset.plataforma === "Multiplataforma"));
  checksGenero.forEach((cb) => (cb.checked = false));
  rangoMin.value = 2020;
  rangoMax.value = 2025;
  actualizarAnioTexto();
  valoracionMinima = 0;
  actualizarValoracionUI();
  if (inputBuscador) inputBuscador.value = "";
  soloFavoritos = false;
  ordenActual = "relevancia";
  ordenTexto.textContent = "Relevancia";
  renderizar();
});

// "Aplicar Filtros" hace lo mismo que cambiar una casilla — el filtrado ya es en
// vivo, pero lo dejamos como disparador explícito por consistencia con el diseño.
document.getElementById("btn-aplicar").addEventListener("click", renderizar);

// ---------- PARÁMETROS DE URL (llegan desde el navbar/footer de las 3 páginas) ----------
// ?categoria=Videojuegos  -> deja marcada solo esa categoría
// ?buscar=texto           -> precarga el buscador
// ?favoritos=1            -> muestra solo los productos guardados como favoritos

const parametrosUrl = new URLSearchParams(window.location.search);

const categoriaUrl = parametrosUrl.get("categoria");
if (categoriaUrl) {
  checksCategoria.forEach((cb) => (cb.checked = cb.dataset.categoria === categoriaUrl));

  // Igual que en Favoritos: si algún filtro del sidebar quedó activo de una
  // visita anterior (ej. Plataforma solo con "Multiplataforma"), no debería
  // tapar productos de esa categoría. El link de categoría debe mostrar TODO,
  // así que el año se abre a rango.min/rango.max (no al 2020 "de fábrica")
  // para no tapar títulos viejos como Minecraft (2011) o Fortnite (2017).
  checksPlataforma.forEach((cb) => (cb.checked = false));
  checksGenero.forEach((cb) => (cb.checked = false));
  rangoMin.value = rangoMin.min;
  rangoMax.value = rangoMax.max;
  valoracionMinima = 0;
}

const buscarUrl = parametrosUrl.get("buscar");
if (buscarUrl && inputBuscador) {
  inputBuscador.value = buscarUrl;
}

soloFavoritos = parametrosUrl.get("favoritos") === "1";

// La vista de Favoritos es "solo lo que guardé, sin condiciones": si algún
// filtro del sidebar quedó activo de una visita anterior (ej. Plataforma
// solo con "Multiplataforma"), no debería tapar un favorito guardado.
if (soloFavoritos) {
  checksCategoria.forEach((cb) => (cb.checked = true));
  checksPlataforma.forEach((cb) => (cb.checked = false));
  checksGenero.forEach((cb) => (cb.checked = false));
  rangoMin.value = rangoMin.min;
  rangoMax.value = rangoMax.max;
  valoracionMinima = 0;
}

// ---------- PRIMER RENDER ----------

actualizarAnioTexto();
actualizarValoracionUI();
renderizar();
