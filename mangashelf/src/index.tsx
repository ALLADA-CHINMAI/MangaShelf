import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//For Google OAuth
root.render(
  <GoogleOAuthProvider clientId='931871122689-qka6dbh1rfli97n3a315c131s8tlrol9.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>
);


