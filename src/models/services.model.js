const mogoose = require("mongoose");
const Schema = mogoose.Schema;

var servicesSchema = new Schema({
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
  personnel: { type: Schema.Types.ObjectId, ref: "personnel" },
});

const serviceModel = mogoose.model("service", servicesSchema);

module.exports = serviceModel;
