const sportsEventService = require("../services/sports-event.service");

exports.getHierarchy = async function(req, res) {
  const sportsEvent = await sportsEventService.getHierarchy(
    req.params.sportsEventId
  );
  res.json(sportsEvent);
};
