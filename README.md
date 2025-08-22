# 🔮 Tarot Místico App

Este proyecto forma parte de una iniciativa educativa basada en un **tarot místico**: una aplicación web interactiva dónde podras visualizar las cartas del tarot, ver el detalle de cada una de ellas y qué mujeres del mundo de la ciencia y tecnología están relacionadas 👩‍🔬

## 🎯 Funcionalidades Nivel 1:
- Mostrar las cartas del tarot que se obtienen al hacer una petición GET a un API externa, boca abajo.
- Mostrar el detalle de cada una de las cartas del tarot al hacer clic y visualizar su información así como la de la científica en correspondencia.

## 💻 Tecnologías y librerías utilizadas
- **HTML5, CSS3 y JavaScript**: Fundamentos del desarrollo web.
- **React**: Librería para construir interfaces de usuario basadas en componentes.
- **Vite**: Herramienta de construcción para un trabajo rápido y moderno con React.
- **Lucide Icons**: 
    - Biblioteca de íconos de código abierto.
    - Uso en el proyecto: para los iconos de las flechas del carrusel.
- **Mui Material**:
    - Biblioteca de componentes de interfaz de usuario para React.
    - Proporciona componentes utilizados y listos para usar para acelerar el desarrollo de aplicaciones web y móviles.
    - Uso en el proyecto: para hacer el acordeón de la página principal.


## 🗂️ Estructura del proyecto

```
tarot/
├── index.html                        ← Archivo HTML principal
├── package.json                      ← Define las dependencias, scripts y metadatos del proyecto.
├── package-lock.json                 ← Registra las versiones exactas de las dependencias instaladas.
├── vite.config.js                    ← Configuración del blunder Vite 
├── eslint.config.js                  ← Define reglas de estilo y calidad de código 
├── READ.md                           ← Documentación del proyecto
├── .gitignore                        ← Archivos que no se deben subir a GitHub
├── /public                           ← Carpeta pública (imágenes) 
└── /src                              ← Código fuente principal del frontend
     ├── /components                  ← Componentes reutilizables de React
     ├── /layout                      ← Componentes de estructura (Nav, Footer, etc.)
     ├── /pages                       ← Páginas principales del sitio 
     │   ├── CardsTarot.jsx           ← Cartas del tarot 
     │   ├── CardDetail.jsx           ← Detalle de carta del tarot con su científica correspondiente
     │   └── Home.jsx                 ← Inicio
     ├── /router                      ← Configuración de rutas con React Router
     │   └── Router.jsx                                                          
     └── /services                    ← Funciones que llaman a la API: GET
         └── TarotServices.jsx                                               
```

## 📦 Instalación y uso
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/guiss26/tarot.git
   cd tarot

2. Instalar dependencias:
   ```bash
   npm install

3. Ejecutar la aplicación React:
   ```bash
   npm run dev
