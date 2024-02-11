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
    CLIENT_X509_CERT_URL,
    UNIVERSE_DOMAIN,
    API_KEY,
    PROJECTID,
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
        client_x509_cert_url: CLIENT_X509_CERT_URL,
        universe_domain: UNIVERSE_DOMAIN
      },
      firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECTID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGINGSENDERID,
        appId: APPID
      }
};