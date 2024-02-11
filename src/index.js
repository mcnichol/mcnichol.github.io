import React from 'react';
import ReactDOM from 'react-dom/client';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";
import App from './App';

import './css/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
) 

registerServiceWorker();
