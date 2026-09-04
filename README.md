# ✨ Para Andrea — Experiencia Interactiva Bajo las Estrellas

Una página web íntima, poética y de alta estética diseñada para pedirle a **Andrea** que sea tu novia.

Diseñada con **HTML5, CSS3 moderno y Vanilla JavaScript** (sin dependencias ni frameworks pesados), lista para desplegar en **Vercel** o **GitHub Pages** en menos de 2 minutos.

---

## 🌟 Características de la Experiencia

1. **Cielo Estrellado Dinámico e Interactivo (Canvas)**:
   - Cientos de estrellas centelleantes y constelaciones que se conectan al mover el mouse o deslizar el dedo en el móvil.
   - Estrellas fugaces que cruzan el firmamento periódicamente.
   - Estela sutil de polvo de estrellas que sigue el cursor.

2. **Capítulos Narrativos Emocionales (Storytelling)**:
   - **Prólogo**: Portada de bienvenida con monograma "A" y frase inicial.
   - **Capítulo 1**: *La casualidad más linda* (con marco Polaroid para su primera foto/recuerdo).
   - **Capítulo 2**: *Lo que haces en mí* (con marco Polaroid para su sonrisa).
   - **Capítulo 3**: *A tu lado* (con marco Polaroid para momentos compartidos).
   - **Capítulo 4 (Clímax)**: *La Gran Pregunta: "¿Quieres ser mi novia?"*.
   - **Capítulo 5**: *Celebración y Carta Secreta*.

3. **El Botón "No" Escurridizo (Evasive Button)**:
   - Cuando Andrea intenta presionar o tocar el botón "No", este **huye suavemente** a un lugar seguro de la pantalla.
   - Cada intento muestra un mensaje juguetón diferente (*"¿Segura?", "¡Ese botón tiene cosquillas!", "¡El destino dice que es la otra opción!", etc.*).
   - Al mismo tiempo, el botón **"¡Sí, acepto! ❤️"** palpita y crece sutilmente con cada intento.

4. **Celebración Triunfal & Fuegos Artificiales de Corazones**:
   - Al presionar **"¡Sí, acepto!"**, se desata una explosión de confeti de corazones y estrellas doradas con repique sonoro de celebración.

5. **Sobre de Lacre Interactivo**:
   - Andrea toca el sello de lacre dorado con su inicial **"A"** para abrir el sobre virtual.
   - Se despliega una carta en pergamino con:
     - Mensaje romántico.
     - **Tarjeta de Invitación Oficial** con el lugar de la cita, fecha, hora y dress code (fácilmente personalizable).
     - **Botón Directo de WhatsApp**: al presionarlo, le abre WhatsApp con el mensaje pre-cargado: *"¡Hola! Acabo de ver la página... y mi respuesta es ¡SÍ! ❤️✨ Nos vemos en nuestra primera cita."*

6. **Música de Fondo Integrada**:
   - Píldora de control de música en la esquina superior derecha.
   - **Generador de Arpegios Celestiales (Web Audio API)**: Suena una melodía mágica y relajante automáticamente desde el primer clic sin necesidad de descargar nada.
   - Si quieres poner una canción real (por ejemplo, su canción favorita en MP3), ¡es tan fácil como soltar el archivo en la carpeta y listo!

---

## 🛠️ Cómo Personalizar Tu Página (Paso a Paso)

### 1. Cambiar tu número de WhatsApp
Abre el archivo [`script.js`](file:///C:/Users/72873/Desktop/aect/script.js) y busca las primeras líneas:
```javascript
const PROPOSAL_CONFIG = {
  // Pon tu número de WhatsApp con código de país (sin el signo '+' ni espacios)
  // Ejemplo México: "5215512345678" | Colombia: "573001234567" | España: "34612345678"
  whatsappPhone: "5210000000000",
```

### 2. Cambiar el Lugar y Fecha de la Cita
Puedes cambiarlo en [`script.js`](file:///C:/Users/72873/Desktop/aect/script.js) en:
```javascript
  datePlace: "Restaurante Secreto (Prepárate para una sorpresa)",
  dateTime: "Este fin de semana a las 8:00 PM",
```
O directamente en [`index.html`](file:///C:/Users/72873/Desktop/aect/index.html) buscando los textos `Restaurante Secreto` y `Este fin de semana`.

### 3. Poner Fotos Reales en las Polaroids
En [`index.html`](file:///C:/Users/72873/Desktop/aect/index.html), busca `photo-1`, `photo-2` y `photo-3`:
- Puedes crear una carpeta llamada `fotos/` y poner por ejemplo `fotos/foto1.jpg`, `fotos/foto2.jpg`, etc.
- O poner el enlace directo de una foto que tengas subida en la web.

### 4. Poner tu Canción Favorita (Opcional)
1. Guarda tu canción en formato MP3 (por ejemplo `cancion.mp3`) en la carpeta del proyecto.
2. En [`index.html`](file:///C:/Users/72873/Desktop/aect/index.html), busca la etiqueta `<audio id="bg-audio">` y añade:
```html
<audio id="bg-audio" preload="auto" loop>
  <source src="cancion.mp3" type="audio/mp3">
</audio>
```

---

## 🚀 Cómo Subirlo a GitHub y Desplegarlo en Vercel

### Opción A: Despliegue en Vercel (Recomendado y más rápido)
1. Ve a [vercel.com](https://vercel.com) e inicia sesión (con tu cuenta de GitHub o correo).
2. Si tienes instalada la CLI de Vercel en tu terminal:
   ```bash
   vercel
   ```
   ¡Y listo! Te dará un enlace instantáneo tipo `https://para-andrea.vercel.app`.
3. O simplemente sube el proyecto a un repositorio en GitHub (ver Opción B) y en Vercel dale a **"Add New Project" -> Importar Repositorio -> Deploy**.

### Opción B: Subir a GitHub
1. Abre tu terminal en la carpeta de este proyecto (`C:\Users\72873\Desktop\aect`).
2. Inicializa el repositorio y sube tus cambios:
   ```bash
   git init
   git add .
   git commit -m "Para Andrea: Una propuesta bajo las estrellas"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```
3. Activar **GitHub Pages** (gratis):
   - En tu repositorio de GitHub ve a **Settings** > **Pages**.
   - En **Branch**, selecciona `main` y guarda.
   - En 1 minuto tendrás tu web en `https://tu-usuario.github.io/tu-repositorio/`.
