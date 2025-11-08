const router = require("express").Router();
const protect = require("../middleware/auth.middleware");
const { createEvent, getMyEvents, updateEventStatus } = require("../controllers/events.controller");

router.post("/", protect, createEvent);
router.get("/", protect, getMyEvents);
router.put("/:id", protect, updateEventStatus);

module.exports = router;
