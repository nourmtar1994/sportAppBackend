const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var armySchema = new Schema({
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
  corps: [
    {
      type: Schema.Types.ObjectId,
      ref: "corp",
    },
  ],
});

const armyModel = mongoose.model("army", armySchema);
module.exports = armyModel;
