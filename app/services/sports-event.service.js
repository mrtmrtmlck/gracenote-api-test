const sportsEventModel = require("../models/sports-event.model");

exports.getHierarchy = async function(sportsEventId) {
  const sportsEventQuery = sportsEventModel
    .findOne({
      id: sportsEventId
    })
    .lean();

  const sportsEventHierarchy = await sportsEventQuery.exec();
  if (!sportsEventHierarchy) {
    return {};
  }

  sportsEventHierarchy.children = [];

  await calculateChildren(sportsEventHierarchy);

  return sportsEventHierarchy;
};

async function calculateChildren(parentSportsEvent) {
  const childrenSportsEventsQuery = sportsEventModel
    .find({
      directParentSportsEventId: parentSportsEvent.id
    })
    .lean();

  const childrenSportsEvents = await childrenSportsEventsQuery.exec();
  if (!childrenSportsEvents) {
    return;
  }

  parentSportsEvent.children = childrenSportsEvents;

  for (const childSportsEvent of childrenSportsEvents) {
    await calculateChildren(childSportsEvent);
  }
}
