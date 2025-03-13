const schedule = require('node-schedule');

let events = []; // In-memory store; consider a database for production

// Create event handler
exports.createEvent = (req, res) => {
  const { name, description, date, time, category, reminder } = req.body;
  if (!name || !date || !time) {
    return res.status(400).json({ error: 'Name, date, and time are required' });
  }
  const newEvent = {
    id: events.length + 1,
    name,
    description,
    date,
    time,
    category,
    reminder,
  };
  events.push(newEvent);

  // Schedule a reminder if required
  if (reminder) {
    const eventDateTime = new Date(`${date} ${time}`);
    // Example: schedule the reminder 5 minutes before the event
    const reminderTime = new Date(eventDateTime.getTime() - 5 * 60 * 1000);
    schedule.scheduleJob(reminderTime, () => {
      console.log(`Reminder: The event "${name}" is about to start!`);
      // Extend this section to integrate email or SMS notifications if needed.
    });
  }
  res.status(201).json(newEvent);
};

// Retrieve events handler with optional filtering (can extend logic)
exports.getEvents = (req, res) => {
  res.json(events);
};
