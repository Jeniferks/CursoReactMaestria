import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CounterContextProvider } from './components/context/CounterContext';
import { TitleColorContextProvider } from './components/context/TitleColorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
      
    </CounterContextProvider>

  </React.StrictMode>
);


