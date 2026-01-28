# Onboarding App

Aplicación web desarrollada con **React** y **Vite** que implementa un flujo completo de **autenticación de usuarios** y **gestión de encuestas**, siguiendo buenas prácticas de desarrollo frontend moderno. Este proyecto fue realizado como **prueba técnica**, priorizando claridad en la arquitectura, reutilización de componentes y una experiencia de usuario alineada a un diseño en Figma.

---

## 📑 Tabla de Contenidos

* [Descripción general](#descripción-general)
* [Características principales](#características-principales)
* [Requisitos previos](#requisitos-previos)
* [Instalación](#instalación)
* [Estructura del proyecto](#estructura-del-proyecto)
* [Ejecución en entorno local](#ejecución-en-entorno-local)
* [Compilación para producción](#compilación-para-producción)
* [Calidad de código y linting](#calidad-de-código-y-linting)
* [Despliegue](#despliegue)
* [Tecnologías utilizadas](#tecnologías-utilizadas)
* [Autor](#autor)

---

## 🧩 Descripción general

**Onboarding App** es una aplicación web que permite a los usuarios:

* Registrarse e iniciar sesión
* Acceder a rutas protegidas
* Completar una encuesta estructurada
* Visualizar información de perfil

La aplicación maneja el estado de autenticación mediante **Context API** y persiste la información clave utilizando **LocalStorage**, sin realizar modificaciones en el backend proporcionado.

---

## ✨ Características principales

* 🔐 **Autenticación de usuarios**
  * Registro, inicio de sesión y cierre de sesión
  * Persistencia de sesión con LocalStorage

* 🛡️ **Protección de rutas**
  * Acceso restringido a vistas privadas mediante layouts y rutas protegidas

* 📝 **Gestión de encuestas**
  * Selección de fecha
  * Preguntas de opción múltiple
  * Validación de respuestas
  * Prevención de envíos duplicados

* 👤 **Perfil de usuario**
  * Visualización de datos básicos y estado de la encuesta

* ♻️ **Arquitectura modular**
  * Componentes reutilizables
  * Separación clara entre lógica, UI y estilos

* 🎨 **Estilos modernos y responsivos**
  * CSS modularizado
  * Diseño fiel al Figma proporcionado

* 🔔 **Feedback visual**
  * Modales y notificaciones para acciones del usuario

---

## 🛠️ Requisitos previos

Antes de ejecutar el proyecto, asegúrate de contar con:

* **Node.js** (versión 18 o superior recomendada)
* **npm** (incluido con Node.js)
* *(Opcional)* **Git** para clonar el repositorio

Verifica las versiones instaladas:

```bash
node -v
npm -v
```

---

## 📦 Instalación

1. **Clonar el repositorio** (opcional):

   ```bash
   git clone https://github.com/JuanArcila07/onboarding.git
   cd onboarding
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

   Este comando instalará todas las dependencias definidas en `package.json`, incluyendo React, Vite, React Router, ESLint, y otros paquetes necesarios para el desarrollo y ejecución.

---

## 📂 Estructura del proyecto

```
onboarding/
├── public/                  # Archivos estáticos públicos
├── src/
│   ├── assets/              # Imágenes y recursos
│   ├── components/          # Componentes reutilizables (auth, layout, survey, ui)
│   ├── context/             # Contextos globales (AuthContext)
│   ├── pages/               # Vistas principales
│   ├── router/              # Configuración de rutas
│   ├── services/            # Consumo de API
│   ├── styles/              # Estilos CSS por módulo
│   ├── App.jsx
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ▶️ Ejecución en entorno local

Para iniciar la aplicación en modo desarrollo:

```bash
npm run dev
```

* El proyecto se ejecutará por defecto en:

  **[http://localhost:5173](http://localhost:5173)**

* Incluye **Hot Module Replacement (HMR)**, por lo que los cambios se reflejan automáticamente en el navegador.

* Puedes registrarte, iniciar sesión, responder encuestas y navegar entre las diferentes vistas protegidas y públicas.

---

## 🏗️ Compilación para producción

Para generar una versión optimizada de la aplicación:

```bash
npm run build
```

* Los archivos finales se generarán en la carpeta `dist/`
* Esta carpeta puede desplegarse en cualquier servicio de hosting estático

Previsualizar la build localmente:

```bash
npm run preview
```

---

## ✅ Calidad de código y linting

El proyecto utiliza **ESLint** para asegurar consistencia y buenas prácticas.

Ejecutar análisis de código:

```bash
npm run lint
```

Las reglas están definidas en `eslint.config.js` e incluyen recomendaciones para:

* JavaScript moderno
* React
* Hooks

---

## 🌐 Despliegue

La aplicación puede desplegarse fácilmente en plataformas como:

* **Vercel**
* **Netlify**
* **Firebase Hosting**
* **GitHub Pages**

**URL del proyecto desplegado (opcional):**  
👉 [https://tuproyecto-ejemplo.com](https://tuproyecto-ejemplo.com)

*(Reemplazar por la URL real si aplica)*

---

## 🧰 Tecnologías utilizadas

* **React**
* **Vite**
* **React Router DOM**
* **Context API**
* **React Icons**
* **ESLint**
* **CSS modular y responsive**

---

## 👨‍💻 Autor

Desarrollado por **Juan Arcila** como parte de una prueba técnica frontend.

Repositorio:  
👉 [https://github.com/JuanArcila07/onboarding](https://github.com/JuanArcila07/onboarding)

---

📩 Para dudas, sugerencias o mejoras, no dudes en abrir un **issue** o enviar un **pull request**.
