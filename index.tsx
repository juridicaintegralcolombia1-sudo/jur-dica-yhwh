
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

const hideLoader = () => {
  const loader = document.getElementById('loading-screen');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      if (loader.parentNode) loader.remove();
    }, 500);
  }
};

if (!rootElement) {
  console.error("No se encontró el elemento root");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    // Intentar ocultar el loader después de un breve delay para permitir que el DOM se asiente
    setTimeout(hideLoader, 1000);
  } catch (error) {
    console.error("Error durante el renderizado inicial:", error);
    hideLoader();
  }
}

// Respaldo absoluto para ocultar el cargador
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(hideLoader, 3000);
});
