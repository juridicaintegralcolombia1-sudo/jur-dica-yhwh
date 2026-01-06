
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    // Ocultar loader una vez que React tome el control
    const hideLoader = () => {
      const loader = document.getElementById('loading-screen');
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
          if (loader.parentNode) loader.remove();
        }, 500);
      }
    };
    
    // Un pequeño delay para que el renderizado inicial sea fluido
    setTimeout(hideLoader, 1000);
  } catch (err) {
    console.error("Error de renderizado:", err);
  }
}
