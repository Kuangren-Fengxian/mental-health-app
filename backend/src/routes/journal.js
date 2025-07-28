const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Journal = require('../models/Journal');

// Get all journals for a user
router.get('/', auth, async (req, res) => {
  try {
    const journals = await Journal.find({ user: req.user.id }).sort({ date: -1 });
    res.json(journals);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get a single journal
router.get('/:id', auth, async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);
    if (!journal) {
      return res.status(404).json({ msg: 'Journal not found' });
    }
    if (journal.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    res.json(journal);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Journal not found' });
    }
    res.status(500).send('Server error');
  }
});

// Create a journal
router.post('/', auth, async (req, res) => {
  const { title, content } = req.body;
  try {
    const newJournal = new Journal({
      title,
      content,
      user: req.user.id,
    });
    const journal = await newJournal.save();
    res.json(journal);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update a journal
router.put('/:id', auth, async (req, res) => {
  const { title, content } = req.body;
  const journalFields = {};
  if (title) journalFields.title = title;
  if (content) journalFields.content = content;
  try {
    let journal = await Journal.findById(req.params.id);
    if (!journal) return res.status(404).json({ msg: 'Journal not found' });
    if (journal.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    journal = await Journal.findByIdAndUpdate(
      req.params.id,
      { $set: journalFields },
      { new: true }
    );
    res.json(journal);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;