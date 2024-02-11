# Configuración

## 1. Usuarios
### 1.1 Firestore
- Configurar conexión con Node.Js y ExpressJs:
    ```
    https://medium.com/@victoriahjeon/using-cloud-firestore-and-firebase-authentication-with-express-js-87fe99e16ead
    ```
### 1.2 Crear proyecto
- Iniciar proyecto
```
npm init
npm install express
npm install dotenv
```
- Registrar firebase con applicación web (Desde la consola de firebase/firestore)
```
npm install firebase
```
Generará un código parecido a este:
```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6kpI7cg-fEim7JMo581nLCuj8n0DHugk",
  authDomain: "beta-shopping-fa365.firebaseapp.com",
  projectId: "beta-shopping-fa365",
  storageBucket: "beta-shopping-fa365.appspot.com",
  messagingSenderId: "981170774955",
  appId: "1:981170774955:web:2614a1fc2f8c165aaae8ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```
O "script"
```
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB6kpI7cg-fEim7JMo581nLCuj8n0DHugk",
    authDomain: "beta-shopping-fa365.firebaseapp.com",
    projectId: "beta-shopping-fa365",
    storageBucket: "beta-shopping-fa365.appspot.com",
    messagingSenderId: "981170774955",
    appId: "1:981170774955:web:2614a1fc2f8c165aaae8ee"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>
```
- Creamos el fichero config.js
´´´
const dotenv = require('dotenv');

dotenv.config();

const {
    TYPE,
    PROJECT_ID,
    PRIVATE_KEY_ID,
    PRIVATE_KEY,
    CLIENT_EMAIL,
    CLIEND_ID,
    AUTH_URI,
    TOKEN_URI,
    AUTH_PROVIDER_X509_CERT_URL,
    UNIVERSE_DOMAIN,
    API_KEY,
    AUTH_DOMAIN,
    STORAGE_BUCKET,
    MESSAGINGSENDERID,
    APPID
} = process.env;

module.exports = {
    serviceAccount: {
        type: TYPE,
        project_id: PROJECT_ID,
        private_key_id: PRIVATE_KEY_ID,
        private_key: PRIVATE_KEY,
        client_email: CLIENT_EMAIL,
        client_id: CLIEND_ID,
        auth_uri: AUTH_URI,
        token_uri: TOKEN_URI,
        auth_provider_x509_cert_url: AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: client_x509_cert_url,
        universe_domain: UNIVERSE_DOMAIN
      },
      firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGINGSENDERID,
        appId: APPID
      }
};
´´´
- Creamos env y guardamos los valores de la siguente manera:
```
PORT=5000
HOST=localhost
HOST_URL=http://localhost:5000




#firebase config
API_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBA...MOkvZun6Yh8G9Oi4YvY=\n-----END PRIVATE KEY-----\n"
AUTH_DOMAIN="googleapis.com"
PROJECT_ID="xxx-xxx365"
STORAGE_BUCKET="xxx"
MESSAGING_SENDER_ID=xxx
APP_ID="xasdasd1342342r23r2"

<Demás variables>
```

- INSTALAR
```
npm install firebase-admin firebase
```