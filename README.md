# Tarjetas de perfil (React + Vite)

Proyecto de práctica para el curso de React. Muestra una lista de tarjetas con foto, nombre, profesión y descripción.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Uso

Levantar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador la dirección que muestra la consola (por defecto `http://localhost:5173`).

## Scripts

| Comando           | Descripción                               |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Servidor de desarrollo                    |
| `npm run build`   | Genera la versión de producción en `dist` |
| `npm run preview` | Sirve localmente la versión de producción |
| `npm run lint`    | Revisa el código con ESLint               |

## Estructura

```
src/
├── App.jsx                      # Lista de tarjetas
├── App.css                      # Estilos del contenedor
├── assets/                      # Imágenes
└── components/
    └── Tarjeta/
        ├── Tarjeta.jsx          # Componente de una tarjeta
        └── Tarjeta.css          # Estilos de la tarjeta
```

## Alias

`@assets` apunta a `src/assets` (configurado en `vite.config.js`):

```js
import ing_img from '@assets/ing.jpeg'
```
