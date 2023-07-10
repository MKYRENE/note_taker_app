const router = require('express').Router();
const methods = require('../../db/db_method.js');


// Routes
router.get('/notes', async (req, res) => {
  methods.read().then(notes => res.json(notes));
});

router.post('/notes', async (req, res) => {
  console.log(req.body); // Log the req.body for debugging purposes

  const newNote = {
    title: req.body.title,
    text: req.body.text
  };

  methods.read()
    .then(notes => {
      const parsedNotes = JSON.parse(notes);
      parsedNotes.push(newNote);
      return parsedNotes;
    })
    .then(updatedNotes => {
      return methods.write(JSON.stringify(updatedNotes));
    })
    .then(() => {
      res.json(newNote);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to save note.' });
    });
});

module.exports = router

