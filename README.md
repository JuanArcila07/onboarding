# Onboarding App

Aplicación web fullstack desarrollada con **React + Vite** en el frontend y **Node.js + MongoDB** en el backend, que implementa un flujo completo de **autenticación de usuarios**, **protección de rutas** y **gestión de encuestas persistentes**, utilizando una base de datos **no relacional**.

Este proyecto fue realizado como **prueba técnica**, priorizando arquitectura limpia, buenas prácticas, seguridad básica y una experiencia de usuario coherente con el diseño entregado en Figma.

🚀 **Demo en producción:**  
👉 https://onboarding-alpha-six.vercel.app

---

## 📑 Tabla de Contenidos

- [Descripción general](#descripción-general)
- [Arquitectura general](#arquitectura-general)
- [Características principales](#características-principales)
- [Modelo de datos](#modelo-de-datos)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Variables de entorno](#variables-de-entorno)
- [Ejecución en entorno local](#ejecución-en-entorno-local)
- [Protección de rutas y seguridad](#protección-de-rutas-y-seguridad)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Compilación para producción](#compilación-para-producción)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Autor](#autor)

---

## 🧩 Descripción general

**Onboarding App** permite a los usuarios:

- Registrarse e iniciar sesión
- Acceder únicamente a rutas protegidas
- Completar una encuesta una sola vez
- Visualizar su perfil con información persistente
- Cerrar sesión de forma segura

El estado de autenticación se gestiona mediante **Context API** en el frontend, mientras que la persistencia de datos se maneja a través de un **backend propio con MongoDB**, asegurando que la información sobreviva a recargas, cierres de sesión y nuevos inicios.

---

## 🏗️ Arquitectura general

```
Frontend (React + Vite)
│
│ HTTP (REST API)
▼
Backend (Node.js)
│
▼
MongoDB (Base de datos NoSQL)
```

- **Frontend:** Maneja UI, validaciones, navegación y estado de sesión.
- **Backend:** Gestiona autenticación, encuestas y persistencia.
- **Base de datos:** MongoDB almacena usuarios y encuestas sin relaciones rígidas.

---

## ✨ Características principales

### 🔐 Autenticación
- Registro de usuarios
- Inicio y cierre de sesión
- Persistencia de sesión
- Protección de rutas privadas

### 🛡️ Protección de rutas
- Acceso restringido mediante `ProtectedRoute`
- Redirección automática si el usuario no está autenticado
- Prevención de navegación con botón “atrás” tras logout

### 📝 Gestión de encuestas
- Encuesta de una sola respuesta por usuario
- Selección de fecha
- Preguntas de opción múltiple
- Persistencia completa en base de datos
- Bloqueo de reenvíos

### 👤 Perfil de usuario
- Visualización de:
  - Usuario
  - Email
  - Teléfono
  - Estado y resultados de la encuesta
- Datos cargados directamente desde la base de datos

### ♻️ Arquitectura limpia
- Separación clara entre:
  - Componentes
  - Rutas
  - Contextos
  - Servicios (API)
  - Estilos

---

## 🗃️ Modelo de datos

### Usuario (`User`)
```js
{
  user: String,
  email: String,
  password: String,
  phone: String,
  surveyCompleted: Boolean,
  survey: String
}
```
### Encuesta (`Survey`)
```js
{
  user: String,
  survey: String,
  createdAt: Date
}
```
MongoDB permite almacenar la encuesta como un objeto flexible sin necesidad de esquemas relacionales.

---

## 🛠️ Requisitos previos

- **Node.js** 18 o superior
- **npm**
- **MongoDB** (local o Atlas)
- *(Opcional)* **Git**

Verifica tus versiones:

```bash
node -v
npm -v
```

---

## 📦 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/JuanArcila07/onboarding.git
   cd onboarding
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

---

## 🔐 Variables de entorno

Crea un archivo `.env` en el backend:

```
MONGODB_URI=your_mongodb_connection_string
```

Ejemplo (MongoDB Atlas):

```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/onboarding
```

---

## ▶️ Ejecución en entorno local

### Frontend

```bash
npm run dev
```

📍 Disponible en:  
👉 http://localhost:5173

### Backend

```bash
npm run dev
```

📍 API disponible en:  
👉 http://localhost:3000/api

Incluye **Hot Module Replacement (HMR)** para recarga automática de cambios en el frontend.

---

## 🔒 Protección de rutas y seguridad

Las rutas privadas (`/survey`, `/profile`) están protegidas mediante `ProtectedRoute`.

Si el usuario no está autenticado:

- No puede acceder por URL directa
- No puede volver usando el botón “atrás”
- El logout elimina el historial de navegación usando `replace`

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
├── api/
│   ├── auth/
│   ├── survey/
│   ├── models/
│   └── lib/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

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

## 🧰 Tecnologías utilizadas

### Frontend
- **React**
- **Vite**
- **React Router DOM**
- **Context API**
- **CSS modular y responsive**

### Backend
- **Node.js**
- **MongoDB**
- **Mongoose**
- **REST API**

---

## 👨‍💻 Autor

Desarrollado por **Juan Arcila** como prueba técnica fullstack.

Repositorio:  
👉 https://github.com/JuanArcila07/onboarding

---

📩 Para dudas, sugerencias o mejoras, no dudes en abrir un **issue** o enviar un **pull request**.