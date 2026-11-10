/* =====================================================
   DETALLE.JS — el "motor" de la plantilla de producto.
   Lee el parámetro ?id=... de la URL, busca ese producto en
   PRODUCTOS (productos-datos.js) y construye todo el HTML de
   la página con JavaScript puro (sin frameworks).

   Conceptos nuevos que se usan aquí (comentados donde aparecen):
   - URLSearchParams: leer parámetros de la URL
   - document.createElement + textContent: crear HTML de forma segura
   - funciones que devuelven elementos, para no repetir código
   ===================================================== */

// 1. Leer el parámetro "id" de la URL, ej: detalle.html?id=minecraft
const parametros = new URLSearchParams(window.location.search);
const idProducto = parametros.get("id");
const producto = PRODUCTOS[idProducto];

// 2. Si no existe ese id en nuestros datos, mostramos un estado de error y frenamos aquí.
if (!producto) {
  document.getElementById("contenido-principal").innerHTML = `
    <div class="no-encontrado">
      <p class="no-encontrado__codigo">ERROR 404</p>
      <h1>Producto no encontrado</h1>
      <p>El id "<strong>${idProducto ?? ""}</strong>" no existe en la base de datos.</p>
      <a href="catalogo.html" class="boton boton--primario">Volver al Catálogo</a>
    </div>
  `;
  throw new Error("Producto no encontrado: " + idProducto);
}

// 3. Título de la pestaña del navegador
document.title = `${producto.nombre} — NEXUS//GAMING`;

// ---------- FUNCIONES AYUDANTES ----------
// Reciben datos simples y devuelven un elemento del DOM ya armado.
// Usamos textContent (no innerHTML) para insertar texto: es más seguro,
// porque nunca interpreta el texto como código HTML.

function crearFila(label, value) {
  const fila = document.createElement("div");
  fila.className = "req-row";
  const spanLabel = document.createElement("span");
  spanLabel.textContent = label;
  const spanValue = document.createElement("span");
  spanValue.textContent = value;
  fila.append(spanLabel, spanValue);
  return fila;
}

function crearBadge(texto, tipo) {
  const span = document.createElement("span");
  span.className = `badge badge--${tipo}`;
  span.textContent = texto;
  return span;
}

function crearMetaItem(label, value) {
  const div = document.createElement("div");
  div.className = "meta-item";
  div.innerHTML = `<p class="meta-item__label"></p><p class="meta-item__value"></p>`;
  div.querySelector(".meta-item__label").textContent = label;
  div.querySelector(".meta-item__value").textContent = value;
  return div;
}

function crearDivisor() {
  const span = document.createElement("span");
  span.className = "developer-row__divider";
  return span;
}

function crearTag(texto) {
  const span = document.createElement("span");
  span.className = "genre-tag";
  span.textContent = texto;
  return span;
}

function crearPlataforma(texto) {
  const span = document.createElement("span");
  span.className = "platform-tag";
  span.textContent = texto;
  return span;
}

function crearSpec(spec) {
  const article = document.createElement("article");
  article.className = "mode-card";
  // Un spec puede traer "valor" (dato corto, ej. "24 GB") o "desc" (texto largo)
  const contenidoExtra = spec.valor
    ? `<p class="mode-card__valor"></p>`
    : `<p class="mode-card__desc"></p>`;
  article.innerHTML = `
    <div class="mode-card__header"><span></span><p></p></div>
    ${contenidoExtra}
  `;
  article.querySelector(".mode-card__header span").textContent = spec.icono;
  article.querySelector(".mode-card__header p").textContent = spec.titulo;
  article.querySelector(spec.valor ? ".mode-card__valor" : ".mode-card__desc").textContent = spec.valor || spec.desc;
  return article;
}

function crearFeature(texto) {
  const li = document.createElement("li");
  li.innerHTML = `<span class="features-list__marker">//</span>`;
  li.append(texto);
  return li;
}

function crearProsCons(texto, esPositivo) {
  const p = document.createElement("p");
  p.className = "proscons__item";
  p.textContent = (esPositivo ? "✅ " : "❌ ") + texto;
  return p;
}

// Construye las 5 estrellas de valoración, redondeando el rating al entero más cercano
function crearEstrellas(rating) {
  const contenedor = document.createDocumentFragment();
  const llenas = Math.round(rating);
  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    img.src = i <= llenas ? "../assets/mc-star.svg" : "../assets/mc-star-off.svg";
    img.alt = "";
    contenedor.append(img);
  }
  return contenedor;
}

function crearGaleriaItem(src, alt) {
  const div = document.createElement("div");
  div.className = "gallery-item";
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  div.append(img);
  return div;
}

// Tarjeta de "producto similar": busca el producto por id en PRODUCTOS
// y arma el link a SU propia página de detalle (detalle.html?id=...)
function crearSimilar(idSimilar) {
  const p = PRODUCTOS[idSimilar];
  if (!p) return document.createDocumentFragment(); // por si algún id no existe

  const a = document.createElement("a");
  a.href = `detalle.html?id=${idSimilar}`;
  a.className = "similar-card";
  a.innerHTML = `
    <div class="similar-card__imagen"><img alt=""></div>
    <span class="badge"></span>
    <p class="similar-card__titulo"></p>
    <p class="similar-card__rating"></p>
  `;
  const img = a.querySelector("img");
  img.src = p.imagen;
  img.alt = p.nombre;
  const badge = a.querySelector(".badge");
  badge.textContent = p.categoria;
  badge.classList.add(p.acento === "cian" ? "badge--cian" : "badge--magenta");
  a.querySelector(".similar-card__titulo").textContent = p.nombre;
  a.querySelector(".similar-card__rating").textContent = `★ ${p.rating.toFixed(1)}`;
  return a;
}

// ---------- RELLENAR LA PLANTILLA ----------

// Breadcrumbs
document.getElementById("bc-categoria").textContent = producto.categoriaPlural;
document.getElementById("bc-actual").textContent = producto.nombre;

// Portada: cambia de clase según sea vertical (juegos) u horizontal (hardware)
const coverCaja = document.getElementById("cover-caja");
coverCaja.classList.add(`hero-block__cover--${producto.imagenOrientacion}`);
const coverImg = document.getElementById("cover-img");
coverImg.src = producto.imagen;
coverImg.alt = producto.nombre;

// Badges (categoría + etiqueta secundaria opcional)
const badgeRow = document.getElementById("badge-row");
badgeRow.append(crearBadge(producto.categoria.toUpperCase(), producto.acento));
if (producto.etiqueta2) {
  const otroAcento = producto.acento === "cian" ? "magenta" : "cian";
  badgeRow.append(crearBadge(producto.etiqueta2, otroAcento));
}

document.getElementById("titulo-producto").textContent = producto.nombre;

// Precio: la sección entera queda oculta (atributo "hidden") si el producto no tiene precio
if (producto.precio) {
  document.getElementById("price-tag").hidden = false;
  document.getElementById("price-valor").textContent = producto.precio;
  document.getElementById("price-stock").textContent = producto.stock || "";
}

// Fila de metadatos (Desarrollador/Editor/Lanzamiento, etc.) con divisores entre cada uno
const metaRow = document.getElementById("meta-row");
producto.meta.forEach((item, i) => {
  metaRow.append(crearMetaItem(item.label, item.value));
  if (i < producto.meta.length - 1) metaRow.append(crearDivisor());
});

// Tags de género/categoría
const tagsRow = document.getElementById("tags-row");
producto.tags.forEach((tag) => tagsRow.append(crearTag(tag)));

// Rating (estrellas + número)
document.getElementById("rating-estrellas").append(crearEstrellas(producto.rating));
document.getElementById("rating-numero").textContent = producto.rating.toFixed(1);

// Plataformas / conectividad
document.getElementById("plataformas-titulo").textContent = producto.plataformasTitulo;
const plataformasLista = document.getElementById("plataformas-lista");
producto.plataformas.forEach((p) => plataformasLista.append(crearPlataforma(p)));

// Descripción
document.getElementById("descripcion-texto").textContent = producto.descripcion;

// Grid de especificaciones / modos de juego
document.getElementById("specs-titulo").textContent = producto.specsTitulo;
const specsGrid = document.getElementById("specs-grid");
producto.specs.forEach((spec) => specsGrid.append(crearSpec(spec)));

// Requisitos (dos columnas: mínimos y recomendados)
document.getElementById("req-titulo").textContent = producto.reqTitulo;
document.getElementById("req-min-titulo").textContent = producto.reqMinTitulo;
document.getElementById("req-rec-titulo").textContent = producto.reqRecTitulo;
const reqMinFilas = document.getElementById("req-min-filas");
producto.reqMin.forEach((fila) => reqMinFilas.append(crearFila(fila.label, fila.value)));
const reqRecFilas = document.getElementById("req-rec-filas");
producto.reqRec.forEach((fila) => reqRecFilas.append(crearFila(fila.label, fila.value)));

// Panel lateral: stats
document.getElementById("stats-titulo").textContent = producto.statsTitulo;
const statsFilas = document.getElementById("stats-filas");
producto.stats.forEach((fila) => statsFilas.append(crearFila(fila.label, fila.value)));

// Panel lateral: características
const featuresLista = document.getElementById("features-lista");
producto.features.forEach((f) => featuresLista.append(crearFeature(f)));

// Panel lateral: pros y contras
const prosLista = document.getElementById("pros-lista");
producto.pros.forEach((p) => prosLista.append(crearProsCons(p, true)));
const contrasLista = document.getElementById("contras-lista");
producto.contras.forEach((c) => contrasLista.append(crearProsCons(c, false)));

// Botón de Favoritos: usa esFavorito()/alternarFavorito() de nav.js (localStorage)
const btnFavorito = document.getElementById("btn-favorito");

function pintarBotonFavorito(activo) {
  btnFavorito.textContent = activo ? "★ En Favoritos" : "☆ Añadir a Favoritos";
  btnFavorito.classList.toggle("activo", activo);
  btnFavorito.setAttribute("aria-pressed", String(activo));
}

pintarBotonFavorito(esFavorito(idProducto));

btnFavorito.addEventListener("click", () => {
  const marcado = alternarFavorito(idProducto);
  pintarBotonFavorito(marcado);
  mostrarToast(marcado ? `✓ ${producto.nombre} se guardó en Favoritos.` : `${producto.nombre} se quitó de Favoritos.`);
});

// Panel lateral: para quién es
document.getElementById("para-quien-texto").textContent = producto.paraQuienEs;

// Galería de imágenes
document.getElementById("galeria-titulo").textContent = producto.galeriaTitulo;
const galeriaRow = document.getElementById("galeria-row");
producto.galeria.forEach((src, i) => galeriaRow.append(crearGaleriaItem(src, `${producto.nombre} ${i + 1}`)));

// Productos similares (busca cada id en la misma base de datos)
const similaresGrid = document.getElementById("similares-grid");
producto.similares.forEach((id) => similaresGrid.append(crearSimilar(id)));
