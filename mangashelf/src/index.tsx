import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/App';
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './auth/msalConfig';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Create MSAL instance
const msalInstance = new PublicClientApplication(msalConfig);

root.render(
  <MsalProvider instance={msalInstance}>
    <App />
  </MsalProvider>
);


