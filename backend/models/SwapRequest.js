const mongoose = require("mongoose");

const swapSchema = new mongoose.Schema(
  {
    mySlotId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
    theirSlotId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
    requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    requestedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["PENDING", "ACCEPTED", "REJECTED"],
      default: "PENDING"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("SwapRequest", swapSchema);
