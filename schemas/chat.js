const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema; // ObjectId is from Room collection in Room Schema
const chatSchema = new Schema({
  room: {
    type: ObjectId,
    required: true,
    ref: "Room", // reference from Room Schema
  },
  user: {
    type: String,
    required: true,
  },
  chat: String,
  gif: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", chatSchema);
