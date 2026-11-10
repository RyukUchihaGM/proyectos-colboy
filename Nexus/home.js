/* =====================================================
   HOME.JS — lo que hace la página de inicio:
   - cuando tocás el botón "Registrar Entrada", baja hasta el
     newsletter y deja el cursor listo en el campo de correo
   - cuando alguien llena el formulario del newsletter, se guarda
     el correo en el navegador y se muestra un mensaje de gracias
   ===================================================== */

/* =====================================================
   ENVÍO DEL CORREO DE BIENVENIDA
   Esta página no tiene nada armado por detrás que mande correos,
   así que usamos EmailJS (www.emailjs.com), un servicio gratis al
   que le pedimos "mandale un correo a esta persona" y él lo manda,
   usando una cuenta de Gmail que se conectó antes ahí.

   Los 3 datos de abajo se sacan de tu cuenta en
   https://dashboard.emailjs.com/. No hay problema en que se vean
   en este archivo aunque cualquiera pueda leerlo abriendo la
   página — no son una contraseña, están hechos para usarse así.

   Una cosa importante: cuando armes el correo en EmailJS, en el
   campo "To Email" tenés que poner {{to_email}}, no tu propio
   correo escrito a mano. Si dejás tu correo ahí, todos los avisos
   te van a llegar a vos en vez de a la persona que se anotó.
   ===================================================== */
const EMAILJS_SERVICE_ID = "service_c3xqesa";
const EMAILJS_TEMPLATE_ID = "template_e2ctmyc";
const EMAILJS_PUBLIC_KEY = "CmmVbMP7b6aK7d9xY";

// El código de EmailJS se carga en index.html con un <script>. Si por
// algo no llegó a cargar, acá simplemente no hacemos nada más y la
// página sigue funcionando normal.
if (typeof emailjs !== "undefined") {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const botonRegistrar = document.getElementById("btn-registrar");
const emailInput = document.getElementById("newsletter-email");

if (botonRegistrar && emailInput) {
  botonRegistrar.addEventListener("click", () => {
    // Bajar hasta el newsletter ya lo hace solo el navegador (por el
    // botón que apunta a #newsletter). Acá solo ponemos el cursor en
    // el campo de correo, esperando un poquito a que termine de bajar.
    setTimeout(() => emailInput.focus(), 400);
  });
}

const CLAVE_SUSCRIPTORES = "nexus-newsletter";
const formNewsletter = document.getElementById("form-newsletter");
const estadoNewsletter = document.getElementById("newsletter-estado");

if (formNewsletter && estadoNewsletter) {
  formNewsletter.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const correo = emailInput.value.trim();

    let suscriptores = [];
    try {
      suscriptores = JSON.parse(localStorage.getItem(CLAVE_SUSCRIPTORES)) || [];
    } catch {
      suscriptores = [];
    }

    const yaEstabaSuscrito = suscriptores.includes(correo);
    if (!yaEstabaSuscrito) {
      suscriptores.push(correo);
      localStorage.setItem(CLAVE_SUSCRIPTORES, JSON.stringify(suscriptores));
    }

    // Acá tratamos de mandar el correo de verdad. Si los 3 datos de
    // arriba están mal o son de mentira, esto va a fallar — lo dejamos
    // controlado para que el formulario no se vea roto, y avisamos por
    // la consola qué fue lo que pasó.
    try {
      if (typeof emailjs === "undefined") {
        throw new Error("El SDK de EmailJS no cargó (revisa el <script> por CDN en index.html)");
      }
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { to_email: correo });
    } catch (error) {
      console.warn(
        "EmailJS todavía no está configurado (el correo NO salió de verdad). " +
          "Reemplazá EMAILJS_SERVICE_ID / EMAILJS_TEMPLATE_ID / EMAILJS_PUBLIC_KEY en home.js " +
          "con los valores de tu cuenta en https://dashboard.emailjs.com/. Detalle del error:",
        error,
      );
    }

    estadoNewsletter.textContent = yaEstabaSuscrito
      ? `✓ ${correo} ya está suscrito a la Red NexusGaming.`
      : `✓ ¡Gracias! Registramos ${correo} en la Red NexusGaming.`;
    estadoNewsletter.hidden = false;
    formNewsletter.reset();
  });
}
