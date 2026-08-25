require('dotenv').config();
const express = require('express');
const cors = require('cors');
const prestatairesRoutes = require('./routes/prestataires');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/prestataires', prestatairesRoutes);

app.get('/', (req, res) => {
  res.send('API en ligne');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});