const router = require("express").Router();
const sportsEventController = require("./../controllers/sports-event.controller");

router.route("/:sportsEventId").get(sportsEventController.getHierarchy);

module.exports = router;
