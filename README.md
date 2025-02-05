# 🗳️ Test Electoral Chile

**Test Electoral Chile** es una plataforma de código abierto diseñada para ayudar a los ciudadanos a conocer mejor a sus candidatos mediante un test electoral interactivo.

## 🌍 Descripción

Este sitio web permite a los usuarios responder preguntas sobre temas políticos y comparar sus respuestas con las posiciones de los candidatos. Se ha construido utilizando **React + Vite** y se despliega automáticamente en **GitHub Pages** con un dominio personalizado.

## 🚀 Tecnologías Utilizadas

- ⚛ **React** (Vite)
- 🎨 **CSS Modular** (con variables personalizadas para colores, tipografía y espaciado)
- 🏗 **React Router** (para navegación entre páginas)
- 🌗 **Modo Oscuro/Claro** (con `ThemeToggle`)
- ☁ **Google Apps Script** (para almacenamiento de respuestas)
- 🛠 **GitHub Actions** (para despliegue automático en cada push)

## 🔗 Enlace al Sitio Web

🌐 [https://testelectoral.vicenteaguero.com](https://testelectoral.vicenteaguero.com)

## 📂 Estructura del Proyecto

```
/public           # Archivos públicos (favicon, imágenes, CNAME)
/src
  ├── assets     # Fuentes y JSON de preguntas
  ├── components # Componentes reutilizables (Nav, Footer, ThemeToggle)
  ├── pages      # Páginas del sitio (Home, Test, About)
  ├── styles     # Archivos CSS organizados
  ├── main.jsx   # Punto de entrada de la app
  ├── App.jsx    # Configuración de rutas con React Router
/github/workflows # Despliegue automático con GitHub Actions
```

## 🛠 Instalación y Uso

1️⃣ **Clonar el repositorio**

```sh
git clone https://github.com/vicenteaguero/test-electoral-chile.git
cd test-electoral-chile
```

2️⃣ **Instalar dependencias**

```sh
npm install
```

3️⃣ **Ejecutar en modo desarrollo**

```sh
npm run dev
```

4️⃣ **Compilar para producción**

```sh
npm run build
```

## 🔄 Despliegue Automático

Cada vez que se hace un `git push`, GitHub Actions:

1. Instala dependencias (`npm install`)
2. Construye el proyecto (`npm run build`)
3. Despliega automáticamente en **GitHub Pages** en `gh-pages`.

## 🛠 Configuración del Dominio Personalizado

El dominio `testelectoral.vicenteaguero.com` está vinculado a GitHub Pages mediante:

- **Registro CNAME en HostGator** (`testelectoral` → `vicenteaguero.github.io`)
- **Archivo `/public/CNAME`** con el dominio personalizado.

## 📜 Licencia

Este proyecto es de código abierto bajo la licencia **MIT**.  
¡Siéntete libre de contribuir o modificarlo! 🚀

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas!

1. Haz un **fork** del repositorio.
2. Crea una **rama nueva** (`git checkout -b feature-nueva`).
3. Realiza tus cambios y haz un **commit** (`git commit -m "Descripción del cambio"`).
4. Sube la rama y abre un **pull request**.

---

🚀 **Desarrollado con ❤️ por Vicente Agüero**
