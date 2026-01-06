
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log("React: Iniciando montaje del DOM...");

const renderApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("No se encontró el elemento #root");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    // Ocultar loader una vez que React tome el control
    setTimeout(() => {
      const loader = document.getElementById('loading-screen');
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
      }
      console.log("Plataforma YHWH lista.");
    }, 800);

  } catch (error) {
    console.error("Error en ReactDOM.render:", error);
    throw error;
  }
};

// Asegurar que el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
