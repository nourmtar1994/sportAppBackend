const mogoose = require("mongoose");
const Schema = mogoose.Schema;

var corpsSchema = new Schema({
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
  underCorps: { type: Schema.Types.ObjectId, ref: "service" },
});

const corpsModel = mogoose.model("corp", corpsSchema);

module.exports = corpsModel;
