# 💌 Cumpleaños 23 — Web sorpresa

Una web súper bonita en tonos **rosa y lila**, con fuentes cursivas, sobre animado en la portada, carousel, polaroids y más detalles para sorprender en un cumpleaños 🎀.

## 🚀 Cómo verla

Solo abre `index.html` en el navegador.  
O para mejor experiencia (recomendado para que carguen las imágenes locales), levanta un servidor simple:

```bash
# Opción 1: Python
python3 -m http.server 5500

# Opción 2: Node (npx)
npx serve .
```

Luego abre <http://localhost:5500>.

## 🖼 Dónde poner las fotos

Todas las imágenes van dentro de `images/` separadas por sección. Mira el archivo [`images/README.md`](images/README.md).

| Carpeta             | Para qué                              | Archivos |
|---------------------|----------------------------------------|----------|
| `images/hero/`      | Foto principal del título              | `hero.jpg` |
| `images/carousel/`  | Carousel "Nuestros momentos"           | `1.jpg` … `4.jpg` |
| `images/gallery/`   | Polaroids "Pequeños recuerdos"         | `1.jpg` … `6.jpg` |

> Si una foto no existe todavía, la web muestra un **placeholder rosado** automáticamente, así puedes ir agregándolas sin romper nada.

## ✏️ Dónde editar los mensajes

Todo el contenido (textos, frases, razones, firma, fechas) está en `index.html`, claramente separado por secciones con comentarios:

- `<!-- ====== HERO ====== -->` → nombre, fecha, "23"
- `<!-- ====== CARTA / MENSAJE ====== -->` → carta principal
- `<!-- ====== CAROUSEL ====== -->` → captions de las fotos
- `<!-- ====== GALERÍA POLAROIDS ====== -->` → títulos de cada polaroid
- `<!-- ====== RAZONES / TARJETAS ====== -->` → las 23 razones
- `<!-- ====== MOMENTO FINAL ====== -->` → mensaje final + firma

## 🎵 Música opcional

Si quieres una canción de fondo:
1. Coloca un archivo en `audio/song.mp3`.
2. En `index.html` descomenta el bloque `<audio id="bgMusic" ...>`.
3. Empezará a sonar al abrir el sobre 💗.

## 🎨 Estructura

```
sourprice-birthday/
├── index.html
├── css/style.css
├── js/main.js
├── audio/                  ← (opcional) canción de fondo
└── images/
    ├── hero/
    ├── carousel/
    └── gallery/
```

¡Disfruta sorprendiéndola! 🌷✨
