const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  const { title, startTime, endTime } = req.body;
  const event = await Event.create({
    title,
    startTime,
    endTime,
    userId: req.user._id
  });
  res.json(event);
};

exports.getMyEvents = async (req, res) => {
  const events = await Event.find({ userId: req.user._id });
  res.json(events);
};

exports.updateEventStatus = async (req, res) => {
  const { status } = req.body;
  const event = await Event.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    { status },
    { new: true }
  );
  res.json(event);
};
