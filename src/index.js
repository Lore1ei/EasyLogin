import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {AuthContextProvide} from "./components/store/autx-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuthContextProvide>
    <App />
    </AuthContextProvide>
);
