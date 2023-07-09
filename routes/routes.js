const PATH = require('path')
const router = require('express').Router();

// Routes
router.get('/', (req, res) => {
  res.sendFile(PATH.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(PATH.join(__dirname, '../public/notes.html'));
});


module.exports = router