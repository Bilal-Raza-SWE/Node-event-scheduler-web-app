const express = require('express');
const router = express.Router();
const { createEvent, getEvents } = require('../controllers/events');

// Create a new event
router.post('/', createEvent);

// Retrieve events (can add query parameters for filtering)
router.get('/', getEvents);

module.exports = router;
