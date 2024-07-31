import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';


import App from './Components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>
);


