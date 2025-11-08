const router = require("express").Router();
const protect = require("../middleware/auth.middleware");
const {
  getSwappableSlots,
  createSwapRequest,
  respondToSwap
} = require("../controllers/swap.controller");

router.get("/swappable-slots", protect, getSwappableSlots);
router.post("/swap-request", protect, createSwapRequest);
router.post("/swap-response/:id", protect, respondToSwap);

module.exports = router;
