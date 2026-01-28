# Onboarding App

Aplicación web desarrollada con **React** y **Vite** que implementa un flujo completo de **autenticación de usuarios** y **gestión de encuestas**, siguiendo buenas prácticas de desarrollo frontend moderno. Este proyecto fue realizado como **prueba técnica**, priorizando claridad en la arquitectura, reutilización de componentes y una experiencia de usuario alineada a un diseño en Figma.

🚀 **Demo en producción:**  
👉 https://onboarding-alpha-six.vercel.app

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

* **Node.js** (18 o superior recomendado)
* **npm**
* *(Opcional)* **Git**

Verifica tus versiones:

```bash
node -v
npm -v
```

---

## 📦 Instalación

1. Clona el repositorio (opcional):

   ```bash
   git clone https://github.com/JuanArcila07/onboarding.git
   cd onboarding
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

---

## 📂 Estructura del proyecto

```
onboarding/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── router/
│   ├── services/
│   ├── styles/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ▶️ Ejecución en entorno local

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:  
👉 [http://localhost:5173](http://localhost:5173)

Incluye **Hot Module Replacement (HMR)** para recarga automática de cambios.

---

## 🏗️ Compilación para producción

Genera una build optimizada:

```bash
npm run build
```

Previsualiza la build localmente:

```bash
npm run preview
```

Los archivos finales estarán en la carpeta `dist/` y pueden desplegarse en cualquier hosting estático.

---

## ✅ Calidad de código y linting

Analiza la calidad del código con ESLint:

```bash
npm run lint
```

Configurado con reglas para JavaScript moderno, React y Hooks.

---

## 🌐 Despliegue

La aplicación está desplegada en **Vercel** con integración continua desde la rama `main`.

🌍 **Producción:**  
👉 https://onboarding-alpha-six.vercel.app

Cada push a `main` genera automáticamente un nuevo despliegue.

---

## 🧰 Tecnologías utilizadas

- **React**
- **Vite**
- **React Router DOM**
- **Context API**
- **ESLint**
- **CSS modular y responsive**

---

## 👨‍💻 Autor

Desarrollado por **Juan Arcila** como prueba técnica frontend.

Repositorio:  
👉 https://github.com/JuanArcila07/onboarding

---

📩 Para dudas, sugerencias o mejoras, no dudes en abrir un **issue** o enviar un **pull request**.
