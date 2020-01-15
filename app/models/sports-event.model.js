const mongoose = require("mongoose");

const sportsEventSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  sportId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    required: true
  },
  scheduleStatus: {
    type: String,
    required: true
  },
  resultStatus: {
    type: String,
    required: true
  },
  parentSportsEventIds: {
    type: [String],
    required: true
  },
  siblingOrder: {
    type: Number,
    required: true
  },
  directParentSportsEventId: {
    type: String,
    required: true
  }
});

const SportsEvent = mongoose.model("sportsEvent", sportsEventSchema);

module.exports = SportsEvent;
