const dbHandler = require("./db-handler");
const sportsEventService = require("../services/sports-event.service");
const sportsEventModel = require("../models/sports-event.model");

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());

/**
 * Seed the database.
 */
beforeEach(async () => await createSportsEvents());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());

/**
 * Test cases for getHierarchy
 */
describe("sportsEvent getHierarchy ", () => {
  it("should return empty object when sportsEventId not found", async () => {
    const foundHierarchy = await sportsEventService.getHierarchy("XYZ123");

    expect(foundHierarchy).toStrictEqual({});
  });

  it("should return non-empty sportsEvent hierarchy when sportsEventId is found", async () => {
    const foundHierarchy = await sportsEventService.getHierarchy(
      "GN86RG0S9EWVK7J"
    );

    expect(foundHierarchy).toBeTruthy();
  });

  it("should return sportsEvent hierarchy with empty children array when parentSportsEvent not have any children", async () => {
    const foundHierarchy = await sportsEventService.getHierarchy(
      "GN86RG0S9EWVK7J"
    );

    expect(foundHierarchy.children).toStrictEqual([]);
  });

  it("should return sportsEvent hierarchy with children array when parentSportsEvent has children", async () => {
    const foundHierarchy = await sportsEventService.getHierarchy(
      "GN0ZZ3DFM0Q7RPC"
    );

    expect(foundHierarchy.children).toHaveLength(2);
  });
});

/**
 * Seed the database with products.
 */
const createSportsEvents = async () => {
  await sportsEventModel.create(sportsEvent1);
  await sportsEventModel.create(sportsEvent2);
  await sportsEventModel.create(sportsEvent3);
};

const sportsEvent1 = {
  id: "GN0ZZ3DFM0Q7RPC",
  sportId: "GN4SWHB0WT4J9EN",
  name: "Open Formula 1",
  eventType: "OVERALL",
  scheduleStatus: "COMPLETED",
  resultStatus: "OFFICIAL",
  parentSportsEventIds: ["GN45ZJYZT1WPFVG", "GNE7N7ASYHDSHV0"],
  siblingOrder: 1,
  directParentSportsEventId: "GNE7N7ASYHDSHV0"
};

const sportsEvent2 = {
  id: "GNA3TYD59B791SE",
  sportId: "GN4SWHB0WT4J9EN",
  name: "2nd Free Practice",
  eventType: "PHASE",
  scheduleStatus: "COMPLETED",
  resultStatus: "OFFICIAL",
  parentSportsEventIds: [
    "GN45ZJYZT1WPFVG",
    "GNE7N7ASYHDSHV0",
    "GN0ZZ3DFM0Q7RPC"
  ],
  siblingOrder: 2,
  directParentSportsEventId: "GN0ZZ3DFM0Q7RPC"
};

const sportsEvent3 = {
  id: "GN86RG0S9EWVK7J",
  sportId: "GN4SWHB0WT4J9EN",
  name: "Race",
  eventType: "PHASE",
  scheduleStatus: "COMPLETED",
  resultStatus: "OFFICIAL",
  parentSportsEventIds: [
    "GN45ZJYZT1WPFVG",
    "GNE7N7ASYHDSHV0",
    "GN0ZZ3DFM0Q7RPC"
  ],
  siblingOrder: 6,
  directParentSportsEventId: "GN0ZZ3DFM0Q7RPC"
};
