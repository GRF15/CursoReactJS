# 🌱 NaturaLab - Tienda Online de Productos Naturales

**Autor:** Gabriel Rodriguez  
**Curso:** React JS - Coderhouse  
**Entrega Final**  
**Demo:** [https://naturalab.vercel.app/](https://naturalab.vercel.app/)

---

## 📝 Descripción

**NaturaLab** es una tienda online ficticia dedicada a la venta de productos naturales, frutos secos y merchandising ecológico. Este proyecto fue desarrollado como entrega final del curso de React JS en Coderhouse, aplicando las últimas prácticas y tecnologías del ecosistema React.

---

## 🚀 Tecnologías Utilizadas

- **React 19**  
  Framework principal para la construcción de interfaces de usuario modernas y reactivas.
- **Vite**  
  Herramienta de desarrollo ultrarrápida para proyectos frontend.
- **React Router DOM v7**  
  Navegación SPA (Single Page Application) y manejo avanzado de rutas.
- **Firebase (Firestore)**  
  Base de datos NoSQL en la nube para almacenamiento de productos y órdenes.
- **SweetAlert2**  
  Alertas y notificaciones visuales personalizadas.
- **CSS personalizado**  
  Estilos propios y fuentes customizadas para una identidad visual única.

---

## 🖥️ Funcionalidades Principales

- **Catálogo de productos:** Visualización y filtrado por categorías.
- **Detalle de producto:** Información detallada, imagen, precio y stock.
- **Carrito de compras:** Añadir, modificar y eliminar productos.
- **Checkout:** Formulario de compra y resumen del pedido.
- **Persistencia:** Productos y órdenes gestionados en Firebase Firestore.
- **Alertas visuales:** Feedback inmediato para acciones clave.
- **SPA y rutas protegidas:** Navegación fluida y manejo de errores 404.

---

## 📸 Capturas

![Vista principal de NaturaLab](src/assets/CapturaDeTienda.png)

---

## ⚙️ Requisitos Previos

- Node.js >= 18.x
- npm >= 9.x

---

## 🛠️ Instalación y Uso

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Configura Firebase (opcional):**  
   Si deseas usar tu propio proyecto de Firebase, reemplaza la configuración en `src/components/firebase.js`.

4. **Inicia el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

5. **Accede a la app:**  
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 📚 Estructura del Proyecto

```
src/
  App.jsx
  main.jsx
  index.css
  assets/
  components/
    NavBar/
    Item/
    ItemDetail/
    ItemList/
    ItemListContainer/
    Checkout/
    NotFound/
    utils/
```

---

## 🎯 Objetivos y Buenas Prácticas

- Componentización y reutilización de código.
- Manejo de estado global con Context API.
- Integración con servicios externos (Firebase).
- Navegación avanzada y manejo de rutas.
- Accesibilidad y experiencia de usuario.
- Código limpio, modular y fácil de mantener.

---

## 🚀 Despliegue

El proyecto está desplegado en Vercel:  
[https://naturalab.vercel.app/](https://naturalab.vercel.app/)

Puedes desplegar tu propia versión fácilmente conectando el repo a Vercel o Netlify.

---

## 💡 Mejoras Futuras

- Autenticación de usuarios.
- Panel de administración para gestión de productos.
- Integración con pasarelas de pago reales.
- Tests automatizados y mejoras de accesibilidad.

---

## 👨‍💻 Autor

Gabriel Rodriguez  
[LinkedIn](https://www.linkedin.com/in/rodriguez-gabriel-fullstackdeveloper/)  
Proyecto realizado para la cursada de **React JS** en [Coderhouse](https://www.coderhouse.com/uy/cursos/reactjs).

---

> ¡Gracias por visitar el proyecto!  
> ¿Tienes sugerencias o encontraste algún bug? Abre un issue o contacta al autor.
