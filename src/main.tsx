import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client for React 18
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Assuming store is typed in redux/store.ts
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // Type assertion for HTMLElement

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
