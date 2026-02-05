import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Suppress ResizeObserver loop errors (harmless browser quirk)
if (process.env.NODE_ENV === 'development') {
  const resizeObserverLoopErrRe = /^[^(]*ResizeObserver loop/;
  const resizeObserverLoopErrRe2 = /^[^(]*ResizeObserver loop completed/;

  const originalError = console.error;
  console.error = (...args: any[]) => {
    if (
      args.length > 0 &&
      typeof args[0] === 'string' &&
      (resizeObserverLoopErrRe.test(args[0]) || resizeObserverLoopErrRe2.test(args[0]))
    ) {
      return;
    }
    originalError.apply(console, args);
  };

  window.addEventListener('error', (event) => {
    if (
      event.message &&
      (resizeObserverLoopErrRe.test(event.message) || resizeObserverLoopErrRe2.test(event.message))
    ) {
      event.stopImmediatePropagation();
      event.preventDefault();
      return false;
    }
  }, true);

  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    if (
      (typeof reason === 'string' && (resizeObserverLoopErrRe.test(reason) || resizeObserverLoopErrRe2.test(reason))) ||
      (reason && reason.message && typeof reason.message === 'string' && (resizeObserverLoopErrRe.test(reason.message) || resizeObserverLoopErrRe2.test(reason.message)))
    ) {
      event.preventDefault();
    }
  });
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
