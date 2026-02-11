const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const { env } = require('process');

async function connectBD() {
   mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connecté à MongoDB !"))
  .catch(err => console.error("Erreur de connexion", err)); 
}

module.exports = connectBD