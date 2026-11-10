/* PRODUCTOS */

const products = [

    {
        id: 1,
        name: "Logitech G502 X",
        category: "Mouse",
        image: "img/products/g502-x.jpg",
        price: 279900,
        oldPrice: 349900,
        rating: 5,
        description:
            "Mouse gaming de alto rendimiento diseñado para ofrecer precisión y control durante largas sesiones.",
        specs: [
            "Sensor HERO de alta precisión",
            "25.600 DPI",
            "Conexión USB",
            "11 botones programables"
        ]
    },

    {
        id: 2,
        name: "Razer DeathAdder V3",
        category: "Mouse",
        image: "img/products/deathadder-v3.jpg",
        price: 299900,
        oldPrice: 379900,
        rating: 5,
        description:
            "Mouse ergonómico enfocado en velocidad, precisión y comodidad.",
        specs: [
            "Sensor Focus Pro",
            "30.000 DPI",
            "Diseño ergonómico",
            "Conexión USB"
        ]
    },

    {
        id: 3,
        name: "Logitech G Pro X Superlight 2",
        category: "Mouse",
        image: "img/products/g-pro-x-superlight-2.jpg",
        price: 499900,
        oldPrice: 579900,
        rating: 5,
        description:
            "Mouse inalámbrico de alto rendimiento pensado para jugadores competitivos.",
        specs: [
            "Tecnología inalámbrica LIGHTSPEED",
            "Sensor HERO 2",
            "Hasta 32.000 DPI",
            "Diseño ultraligero"
        ]
    },

    {
        id: 4,
        name: "Razer Basilisk V3",
        category: "Mouse",
        image: "img/products/basilisk-v3.jpg",
        price: 219900,
        oldPrice: 279900,
        rating: 4,
        description:
            "Mouse gaming versátil con múltiples botones y personalización RGB.",
        specs: [
            "26.000 DPI",
            "11 botones programables",
            "Razer Chroma RGB",
            "Conexión USB"
        ]
    },

    {
        id: 5,
        name: "Logitech G Pro X TKL",
        category: "Teclados",
        image: "img/products/g-pro-x-tkl.jpg",
        price: 699900,
        oldPrice: 799900,
        rating: 5,
        description:
            "Teclado gaming compacto diseñado para ofrecer una experiencia competitiva.",
        specs: [
            "Formato TKL",
            "Interruptores mecánicos",
            "RGB LIGHTSYNC",
            "Conexión inalámbrica"
        ]
    },

    {
        id: 6,
        name: "Razer BlackWidow V4",
        category: "Teclados",
        image: "img/products/blackwidow-v4.jpg",
        price: 649900,
        oldPrice: 749900,
        rating: 5,
        description:
            "Teclado mecánico gaming con iluminación RGB y construcción premium.",
        specs: [
            "Interruptores mecánicos",
            "Razer Chroma RGB",
            "Macro keys",
            "Conexión USB"
        ]
    },

    {
        id: 7,
        name: "SteelSeries Apex Pro",
        category: "Teclados",
        image: "img/products/apex-pro.jpg",
        price: 899900,
        oldPrice: 999900,
        rating: 5,
        description:
            "Teclado gaming premium con switches ajustables.",
        specs: [
            "Switches ajustables",
            "OLED Smart Display",
            "RGB por tecla",
            "Construcción de aluminio"
        ]
    },

    {
        id: 8,
        name: "HyperX Cloud III",
        category: "Audífonos",
        image: "img/products/cloud-iii.jpg",
        price: 329900,
        oldPrice: 399900,
        rating: 5,
        description:
            "Audífonos gaming enfocados en comodidad y sonido envolvente.",
        specs: [
            "Drivers de 53 mm",
            "Micrófono desmontable",
            "Sonido espacial DTS",
            "Conexión USB"
        ]
    },

    {
        id: 9,
        name: "Razer BlackShark V2 Pro",
        category: "Audífonos",
        image: "img/products/blackshark-v2-pro.jpg",
        price: 549900,
        oldPrice: 649900,
        rating: 5,
        description:
            "Audífonos inalámbricos diseñados para gaming competitivo.",
        specs: [
            "Conexión inalámbrica",
            "Micrófono HyperClear",
            "Sonido espacial",
            "Hasta 70 horas de batería"
        ]
    },

    {
        id: 10,
        name: "SteelSeries Arctis Nova 7",
        category: "Audífonos",
        image: "img/products/arctis-nova-7.jpg",
        price: 649900,
        oldPrice: 749900,
        rating: 5,
        description:
            "Audífonos inalámbricos versátiles para gaming y entretenimiento.",
        specs: [
            "Wireless 2.4 GHz",
            "Bluetooth",
            "Micrófono retráctil",
            "Audio espacial"
        ]
    },

    {
        id: 11,
        name: "Logitech G640",
        category: "Mousepads",
        image: "img/products/g640.jpg",
        price: 119900,
        oldPrice: 149900,
        rating: 5,
        description:
            "Superficie diseñada para movimientos rápidos y consistentes.",
        specs: [
            "Superficie de tela",
            "Base de goma",
            "Tamaño grande",
            "Optimizado para gaming"
        ]
    },

    {
        id: 12,
        name: "Razer Gigantus V2",
        category: "Mousepads",
        image: "img/products/gigantus-v2.jpg",
        price: 99900,
        oldPrice: 129900,
        rating: 4,
        description:
            "Mousepad amplio con superficie optimizada para precisión.",
        specs: [
            "Superficie de tela",
            "Base antideslizante",
            "Formato grande",
            "Bordes reforzados"
        ]
    },

    {
        id: 13,
        name: "Xbox Wireless Controller",
        category: "Controles",
        image: "img/products/xbox-controller.jpg",
        price: 249900,
        oldPrice: 299900,
        rating: 5,
        description:
            "Control inalámbrico para Xbox y PC con diseño ergonómico.",
        specs: [
            "Bluetooth",
            "Compatible con PC",
            "Botón Share",
            "Diseño ergonómico"
        ]
    },

    {
        id: 14,
        name: "DualSense Wireless Controller",
        category: "Controles",
        image: "img/products/dualsense.jpg",
        price: 349900,
        oldPrice: 399900,
        rating: 5,
        description:
            "Control de PlayStation 5 con retroalimentación háptica y gatillos adaptativos.",
        specs: [
            "Feedback háptico",
            "Gatillos adaptativos",
            "Micrófono integrado",
            "Bluetooth"
        ]
    },

    {
        id: 15,
        name: "HyperX QuadCast S",
        category: "Micrófonos",
        image: "img/products/quadcast-s.jpg",
        price: 499900,
        oldPrice: 579900,
        rating: 5,
        description:
            "Micrófono USB con iluminación RGB y múltiples patrones de captación.",
        specs: [
            "Conexión USB",
            "RGB",
            "4 patrones polares",
            "Shock mount integrado"
        ]
    },

    {
        id: 16,
        name: "Razer Seiren V3 Mini",
        category: "Micrófonos",
        image: "img/products/seiren-v3-mini.jpg",
        price: 239900,
        oldPrice: 299900,
        rating: 4,
        description:
            "Micrófono compacto diseñado para streaming y gaming.",
        specs: [
            "Conexión USB",
            "Formato compacto",
            "Patrón cardioide",
            "Mute integrado"
        ]
    },

    {
        id: 17,
        name: "AMD Ryzen 7 7800X3D",
        category: "Componentes",
        image: "img/products/ryzen-7-7800x3d.jpg",
        price: 1499900,
        oldPrice: 1699900,
        rating: 5,
        description:
            "Procesador gaming de alto rendimiento con tecnología 3D V-Cache.",
        specs: [
            "8 núcleos",
            "16 hilos",
            "Socket AM5",
            "Tecnología 3D V-Cache"
        ]
    },

    {
        id: 18,
        name: "NVIDIA GeForce RTX 4070 SUPER",
        category: "Componentes",
        image: "img/products/rtx-4070-super.jpg",
        price: 2999900,
        oldPrice: 3299900,
        rating: 5,
        description:
            "Tarjeta gráfica diseñada para gaming de alto rendimiento.",
        specs: [
            "12 GB GDDR6X",
            "Ray Tracing",
            "DLSS",
            "Arquitectura Ada Lovelace"
        ]
    },

    {
        id: 19,
        name: "Corsair Vengeance RGB DDR5",
        category: "Componentes",
        image: "img/products/corsair-ddr5.jpg",
        price: 499900,
        oldPrice: 579900,
        rating: 5,
        description:
            "Memoria DDR5 de alto rendimiento con iluminación RGB.",
        specs: [
            "32 GB",
            "DDR5",
            "RGB",
            "Perfil XMP"
        ]
    },

    {
        id: 20,
        name: "PlayStation 5 Slim",
        category: "Consolas",
        image: "img/products/ps5-slim.jpg",
        price: 2499900,
        oldPrice: 2799900,
        rating: 5,
        description:
            "Consola de nueva generación en un formato más compacto.",
        specs: [
            "SSD integrado",
            "4K",
            "Ray Tracing",
            "Control DualSense incluido"
        ]
    },

    {
        id: 21,
        name: "Xbox Series X",
        category: "Consolas",
        image: "img/products/xbox-series-x.jpg",
        price: 2599900,
        oldPrice: 2899900,
        rating: 5,
        description:
            "Consola de alto rendimiento diseñada para gaming en 4K.",
        specs: [
            "1 TB SSD",
            "4K",
            "120 FPS",
            "Ray Tracing"
        ]
    },

    {
        id: 22,
        name: "Elden Ring",
        category: "Videojuegos",
        image: "img/products/elden-ring.jpg",
        price: 229900,
        oldPrice: 299900,
        rating: 5,
        description:
            "RPG de acción de mundo abierto desarrollado por FromSoftware.",
        specs: [
            "Mundo abierto",
            "RPG de acción",
            "Multijugador",
            "PC / Consolas"
        ]
    },

    {
        id: 23,
        name: "Cyberpunk 2077",
        category: "Videojuegos",
        image: "img/products/cyberpunk-2077.jpg",
        price: 179900,
        oldPrice: 249900,
        rating: 5,
        description:
            "RPG de mundo abierto ambientado en una ciudad futurista.",
        specs: [
            "Mundo abierto",
            "RPG",
            "Ray Tracing",
            "PC / Consolas"
        ]
    },

    {
        id: 24,
        name: "Hogwarts Legacy",
        category: "Videojuegos",
        image: "img/products/hogwarts-legacy.jpg",
        price: 199900,
        oldPrice: 279900,
        rating: 4,
        description:
            "Aventura RPG ambientada en el universo mágico de Hogwarts.",
        specs: [
            "RPG de acción",
            "Mundo abierto",
            "PC / Consolas",
            "Modo historia"
        ]
    }

];


/* VARIABLES */

let currentProducts = [...products];
let filteredProducts = [...products];
let selectedCategory = "Todos";
let cart = [];
let currentProduct = null;


/* ELEMENTOS */

const productsGrid =
    document.getElementById("productsGrid");

const productCounter =
    document.getElementById("productCounter");

const noResults =
    document.getElementById("noResults");

const sortSelect =
    document.getElementById("sortSelect");

const searchButton =
    document.getElementById("searchButton");

const searchOverlay =
    document.getElementById("searchOverlay");

const closeSearch =
    document.getElementById("closeSearch");

const searchInput =
    document.getElementById("searchInput");

const themeButton =
    document.getElementById("themeButton");

const themePanel =
    document.getElementById("themePanel");

const cartButton =
    document.getElementById("cartButton");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCart =
    document.getElementById("closeCart");

const cartProducts =
    document.getElementById("cartProducts");

const cartCount =
    document.getElementById("cartCount");

const productModal =
    document.getElementById("productModal");

const closeProductModal =
    document.getElementById("closeProductModal");

const modalImage =
    document.getElementById("modalImage");

const modalCategory =
    document.getElementById("modalCategory");

const modalName =
    document.getElementById("modalName");

const modalRating =
    document.getElementById("modalRating");

const modalOldPrice =
    document.getElementById("modalOldPrice");

const modalPrice =
    document.getElementById("modalPrice");

const modalDescription =
    document.getElementById("modalDescription");

const modalSpecs =
    document.getElementById("modalSpecs");

const modalAddCart =
    document.getElementById("modalAddCart");


/* MONEDA */

function formatPrice(price) {

    return new Intl.NumberFormat(
        "es-CO",
        {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0
        }
    ).format(price);

}


/* ESTRELLAS */

function createStars(rating) {

    return "★".repeat(rating) +
        "☆".repeat(5 - rating);

}


/* DESCUENTO */

function calculateDiscount(oldPrice, price) {

    return Math.round(
        ((oldPrice - price) / oldPrice) * 100
    );

}


/* PRODUCTOS */

function renderProducts(list = currentProducts) {

    productsGrid.innerHTML = "";

    productCounter.textContent =
        `${list.length} productos`;

    if (list.length === 0) {

        noResults.style.display =
            "block";

        return;

    }

    noResults.style.display =
        "none";

    list.forEach(product => {

        const card =
            document.createElement("article");

        card.className =
            "product-card";

        card.dataset.id =
            product.id;

        const discount =
            calculateDiscount(
                product.oldPrice,
                product.price
            );

        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <span class="discount">
                    -${discount}%
                </span>

            </div>

            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <div class="rating">
                    ${createStars(product.rating)}
                </div>

                <div class="price-container">

                    <span class="old-price">
                        ${formatPrice(product.oldPrice)}
                    </span>

                    <span class="current-price">
                        ${formatPrice(product.price)}
                    </span>

                </div>

            </div>

        `;

        card.addEventListener(
            "click",
            () => openProduct(product)
        );

        productsGrid.appendChild(card);

    });

}


/* CATEGORÍAS */

document
    .querySelectorAll(".category-card")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".category-card")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                selectedCategory =
                    button.dataset.category;

                if (
                    selectedCategory ===
                    "Todos"
                ) {

                    filteredProducts =
                        [...products];

                } else {

                    filteredProducts =
                        products.filter(
                            product =>
                                product.category ===
                                selectedCategory
                        );

                }

                applyCurrentSort();

                renderProducts(
                    currentProducts
                );

            }
        );

    });


/* ORDENAR */

function applyCurrentSort() {

    const sortValue =
        sortSelect.value;

    currentProducts =
        [...filteredProducts];

    if (sortValue === "low") {

        currentProducts.sort(
            (a, b) =>
                a.price - b.price
        );

    } else if (sortValue === "high") {

        currentProducts.sort(
            (a, b) =>
                b.price - a.price
        );

    } else if (sortValue === "rating") {

        currentProducts.sort(
            (a, b) =>
                b.rating - a.rating
        );

    }

}


sortSelect.addEventListener(
    "change",
    () => {

        applyCurrentSort();

        renderProducts(
            currentProducts
        );

    }
);


/* BUSCADOR */

function normalizeText(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


function levenshteinDistance(a, b) {

    const matrix = [];

    for (
        let i = 0;
        i <= b.length;
        i++
    ) {

        matrix[i] = [i];

    }

    for (
        let j = 0;
        j <= a.length;
        j++
    ) {

        matrix[0][j] = j;

    }

    for (
        let i = 1;
        i <= b.length;
        i++
    ) {

        for (
            let j = 1;
            j <= a.length;
            j++
        ) {

            if (
                b.charAt(i - 1) ===
                a.charAt(j - 1)
            ) {

                matrix[i][j] =
                    matrix[i - 1][j];

            } else {

                matrix[i][j] =
                    Math.min(

                        matrix[i - 1][j] + 1,

                        matrix[i][j - 1] + 1,

                        matrix[i - 1][j - 1] + 1

                    );

            }

        }

    }

    return matrix[b.length][a.length];

}


function calculateSearchScore(product, query) {

    const name =
        normalizeText(product.name);

    const category =
        normalizeText(product.category);

    const description =
        normalizeText(product.description);

    const specs =
        normalizeText(
            product.specs.join(" ")
        );

    let score = 0;

    if (name === query) {

        score += 100;

    }

    if (name.includes(query)) {

        score += 70;

    }

    if (category.includes(query)) {

        score += 50;

    }

    if (description.includes(query)) {

        score += 20;

    }

    if (specs.includes(query)) {

        score += 15;

    }

    const queryWords =
        query
            .split(/\s+/)
            .filter(Boolean);

    queryWords.forEach(word => {

        if (name.includes(word)) {

            score += 35;

        }

        if (category.includes(word)) {

            score += 20;

        }

        if (description.includes(word)) {

            score += 10;

        }

    });

    const searchableText =
        `${name} ${category} ${description} ${specs}`;

    const words =
        searchableText
            .split(/[\s,./()\-]+/)
            .filter(
                word =>
                    word.length > 2
            );

    words.forEach(word => {

        const distance =
            levenshteinDistance(
                query,
                word
            );

        const maxLength =
            Math.max(
                query.length,
                word.length
            );

        if (maxLength === 0) {

            return;

        }

        const similarity =
            1 -
            (distance / maxLength);

        if (similarity >= 0.75) {

            score +=
                Math.round(
                    similarity * 45
                );

        }

    });

    return score;

}


function detectCategory(query) {

    const categoryMap = {

        mouse: "Mouse",
        mouses: "Mouse",

        teclado: "Teclados",
        teclados: "Teclados",

        audifono: "Audífonos",
        audifonos: "Audífonos",

        mousepad: "Mousepads",
        mousepads: "Mousepads",

        control: "Controles",
        controles: "Controles",

        microfono: "Micrófonos",
        microfonos: "Micrófonos",

        componente: "Componentes",
        componentes: "Componentes",

        consola: "Consolas",
        consolas: "Consolas",

        videojuego: "Videojuegos",
        videojuegos: "Videojuegos"

    };

    return categoryMap[query] || null;

}


/* ABRIR BUSCADOR */

searchButton.addEventListener(
    "click",
    () => {

        searchOverlay.classList.add(
            "active"
        );

        searchInput.focus();

    }
);


/* CERRAR BUSCADOR */

closeSearch.addEventListener(
    "click",
    closeSearchOverlay
);


function closeSearchOverlay() {

    searchOverlay.classList.remove(
        "active"
    );

    searchInput.value = "";

}


/* BUSCAR */

searchInput.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Enter") {

            return;

        }

        event.preventDefault();

        const query =
            normalizeText(
                searchInput.value
            );

        if (!query) {

            return;

        }

        searchOverlay.classList.remove(
            "active"
        );

        const category =
            detectCategory(query);

        if (category) {

            selectedCategory =
                category;

            filteredProducts =
                products.filter(
                    product =>
                        product.category ===
                        category
                );

            document
                .querySelectorAll(
                    ".category-card"
                )
                .forEach(button => {

                    button.classList.remove(
                        "active"
                    );

                    if (
                        button.dataset.category ===
                        category
                    ) {

                        button.classList.add(
                            "active"
                        );

                    }

                });

        } else {

            selectedCategory =
                "Búsqueda";

            const results =
                products
                    .map(product => ({

                        product,

                        score:
                            calculateSearchScore(
                                product,
                                query
                            )

                    }))
                    .filter(
                        result =>
                            result.score >= 15
                    )
                    .sort(
                        (a, b) =>
                            b.score - a.score
                    );

            filteredProducts =
                results.map(
                    result =>
                        result.product
                );

            document
                .querySelectorAll(
                    ".category-card"
                )
                .forEach(button =>
                    button.classList.remove(
                        "active"
                    )
                );

        }

        applyCurrentSort();

        renderProducts(
            currentProducts
        );

        const catalog =
            productsGrid.closest(
                "section"
            );

        if (catalog) {

            setTimeout(
                () => {

                    catalog.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                },
                100
            );

        }

    }

);


/* VISTA DEL PRODUCTO */

function openProduct(product) {

    currentProduct =
        product;

    modalImage.src =
        product.image;

    modalImage.alt =
        product.name;

    modalCategory.textContent =
        product.category;

    modalName.textContent =
        product.name;

    modalRating.textContent =
        createStars(
            product.rating
        );

    modalOldPrice.textContent =
        formatPrice(
            product.oldPrice
        );

    modalPrice.textContent =
        formatPrice(
            product.price
        );

    modalDescription.textContent =
        product.description;

    modalSpecs.innerHTML = "";

    product.specs.forEach(
        spec => {

            const li =
                document.createElement(
                    "li"
                );

            li.textContent =
                "• " + spec;

            modalSpecs.appendChild(
                li
            );

        }
    );

    productModal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

}


/* CERRAR PRODUCTO */

closeProductModal.addEventListener(
    "click",
    closeProduct
);


function closeProduct() {

    productModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


productModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            productModal
        ) {

            closeProduct();

        }

    }
);


/* CARRITO */

modalAddCart.addEventListener(
    "click",
    () => {

        if (!currentProduct) {

            return;

        }

        addToCart(
            currentProduct
        );

        closeProduct();

    }
);


function addToCart(product) {

    const existing =
        cart.find(
            item =>
                item.id ===
                product.id
        );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }

    updateCart();

}


function updateCart() {

    cartProducts.innerHTML = "";

    let totalItems = 0;

    cart.forEach(
        item => {

            totalItems +=
                item.quantity;

            const element =
                document.createElement(
                    "div"
                );

            element.className =
                "cart-item";

            element.innerHTML = `

                <div class="cart-item-image"></div>

                <div>

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        ${formatPrice(item.price)}
                        × ${item.quantity}
                    </p>

                </div>

                <button
                    class="remove-cart"
                    data-id="${item.id}"
                >
                    Eliminar
                </button>

            `;

            element
                .querySelector(
                    ".remove-cart"
                )
                .addEventListener(
                    "click",
                    () =>
                        removeFromCart(
                            item.id
                        )
                );

            cartProducts.appendChild(
                element
            );

        }
    );

    if (cart.length === 0) {

        cartProducts.innerHTML = `

            <div class="empty-cart">

                <p>
                    Tu carrito está vacío.
                </p>

            </div>

        `;

    }

    cartCount.textContent =
        totalItems;

}


function removeFromCart(id) {

    cart =
        cart.filter(
            item =>
                item.id !== id
        );

    updateCart();

}


/* ABRIR CARRITO */

cartButton.addEventListener(
    "click",
    () => {

        cartOverlay.classList.add(
            "active"
        );

        document.body.style.overflow =
            "hidden";

    }
);


/* CERRAR CARRITO */

closeCart.addEventListener(
    "click",
    closeCartPanel
);


function closeCartPanel() {

    cartOverlay.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


/* TEMAS */

themeButton.addEventListener(
    "click",
    () => {

        themePanel.classList.toggle(
            "active"
        );

    }
);


document
    .querySelectorAll(
        "[data-theme]"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const theme =
                        button.dataset.theme;

                    document.body.dataset.theme =
                        theme;

                    localStorage.setItem(
                        "novaTheme",
                        theme
                    );

                    themePanel.classList.remove(
                        "active"
                    );

                }
            );

        }
    );


/* TEMA GUARDADO */

const savedTheme =
    localStorage.getItem(
        "novaTheme"
    );

if (savedTheme) {

    document.body.dataset.theme =
        savedTheme;

}


/* HEADER */

let lastScroll =
    window.scrollY;


window.addEventListener(
    "scroll",
    () => {

        const currentScroll =
            window.scrollY;

        const header =
            document.getElementById(
                "header"
            );

        if (
            currentScroll >
                lastScroll &&
            currentScroll > 100
        ) {

            header.classList.add(
                "hidden"
            );

        } else {

            header.classList.remove(
                "hidden"
            );

        }

        lastScroll =
            currentScroll;

    }
);


/* CERRAR TEMA */

document.addEventListener(
    "click",
    event => {

        if (
            !themePanel.contains(
                event.target
            ) &&
            !themeButton.contains(
                event.target
            )
        ) {

            themePanel.classList.remove(
                "active"
            );

        }

    }
);


/* CARGA */

window.addEventListener(
    "load",
    () => {

        const loader =
            document.getElementById(
                "loader"
            );

        if (loader) {

            setTimeout(
                () => {

                    loader.classList.add(
                        "hidden"
                    );

                },
                500
            );

        }

    }
);


/* INICIO */

renderProducts();

updateCart();