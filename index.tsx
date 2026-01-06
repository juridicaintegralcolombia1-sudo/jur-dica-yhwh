
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log("Iniciando renderizado de la aplicación...");

const rootElement = document.getElementById('root');

const hideLoader = () => {
  const loader = document.getElementById('loading-screen');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      if (loader.parentNode) loader.remove();
      console.log("Loader removido exitosamente.");
    }, 500);
  }
};

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    // Un pequeño retraso para asegurar que el primer renderizado se complete
    setTimeout(() => {
      console.log("Renderizado inicial completado.");
      hideLoader();
    }, 1000);
    
  } catch (err) {
    console.error("Error fatal en el arranque de React:", err);
    // Este error será capturado por el window.onerror del HTML
    throw err; 
  }
} else {
  console.error("No se pudo encontrar el contenedor #root en el DOM.");
}
