const Event = require("../models/Event");
const SwapRequest = require("../models/SwapRequest");

// Get swappable slots of OTHER users
exports.getSwappableSlots = async (req, res) => {
  const events = await Event.find({
    status: "SWAPPABLE",
    userId: { $ne: req.user._id }
  });
  res.json(events);
};

// Create swap request
exports.createSwapRequest = async (req, res) => {
  const { mySlotId, theirSlotId } = req.body;

  const mySlot = await Event.findById(mySlotId);
  const theirSlot = await Event.findById(theirSlotId);

  if (!mySlot || !theirSlot) return res.status(400).json({ message: "Invalid slot IDs" });
  if (mySlot.status !== "SWAPPABLE" || theirSlot.status !== "SWAPPABLE")
    return res.status(400).json({ message: "One or both slots are not swappable" });

  const swap = await SwapRequest.create({
    mySlotId,
    theirSlotId,
    requestedBy: req.user._id,
    requestedTo: theirSlot.userId
  });

  await mySlot.updateOne({ status: "SWAP_PENDING" });
  await theirSlot.updateOne({ status: "SWAP_PENDING" });

  res.json(swap);
};

// Respond to swap
exports.respondToSwap = async (req, res) => {
  const { accepted } = req.body; // true or false
  const requestId = req.params.id;

  const request = await SwapRequest.findById(requestId);
  if (!request) return res.status(404).json({ message: "Request not found" });

  const mySlot = await Event.findById(request.mySlotId);
  const theirSlot = await Event.findById(request.theirSlotId);

  if (accepted) {
    const tempOwner = mySlot.userId;
    mySlot.userId = theirSlot.userId;
    theirSlot.userId = tempOwner;

    mySlot.status = "BUSY";
    theirSlot.status = "BUSY";
    request.status = "ACCEPTED";

    await mySlot.save();
    await theirSlot.save();
    await request.save();

    return res.json({ message: "Swap accepted", request });
  } else {
    mySlot.status = "SWAPPABLE";
    theirSlot.status = "SWAPPABLE";
    request.status = "REJECTED";

    await mySlot.save();
    await theirSlot.save();
    await request.save();

    return res.json({ message: "Swap rejected", request });
  }
};
