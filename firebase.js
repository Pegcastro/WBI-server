const serviceConfig = require('./service-account.json');
const admin = require('firebase-admin');

const firebase = admin.initializeApp({ 
    credential: admin.credential.cert(serviceConfig) 
});

module.exports = firebase;