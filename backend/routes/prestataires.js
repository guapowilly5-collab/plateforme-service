const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Route prestataires prête' });
});

module.exports = router;