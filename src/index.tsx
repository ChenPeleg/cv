import React from 'react';
import ReactDOM from "react-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
//registerServiceWorker();

