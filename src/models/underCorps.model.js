const mogoose = require("mongoose");
const Schema = mogoose.Schema;

var underCorpsSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  label_AR: {
    type: String,
    required: true,
  },
  label_FR: {
    type: String,
    required: true,
  },
  short_label_AR: {
    type: String,
    required: true,
  },
  short_label_FR: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  underCorps: { type: Schema.Types.ObjectId, ref: "underCorp" },
});

const underCorpsModel = mogoose.model("underCorp", underCorpsSchema);

module.exports = underCorpsModel;
