
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

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    // Solo quitamos el loader si llegamos aquí sin errores catastróficos
    // Esperamos un momento a que los componentes hijos carguen sus efectos
    setTimeout(hideLoader, 1500);
    
  } catch (err) {
    console.error("Error de renderizado inicial:", err);
    // Si hay error, el window.onerror de index.html lo atrapará
    throw err; 
  }
} else {
  console.error("No se encontró el elemento #root");
}
