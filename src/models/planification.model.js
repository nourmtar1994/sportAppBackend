const mongoose = require("mongoose");
const { Schema } = mongoose;

const planificationSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  allDay: {
    type: Boolean,
  },
  color: {
    type: String,
    default: "#2c3e50d4",
  },
  target: {
    base: [{ type: Schema.Types.ObjectId, ref: "base", default: null }],
    unite: [{ type: Schema.Types.ObjectId, ref: "unite", default: null }],
    personnel: [
      { type: Schema.Types.ObjectId, ref: "personnel", default: null },
    ],
  },
});

const planificationModel = mongoose.model(
  "planifications",
  planificationSchema
);
module.exports = planificationModel;
