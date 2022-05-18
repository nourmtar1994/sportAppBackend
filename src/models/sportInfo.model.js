const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var sportInfoSchema = new Schema({
  taille: {
    type: Number,
    default: null,
  },
  poids: {
    type: Number,
    default: null,
  },
  note_pompe: {
    type: Number,
    default: null,
  },
  note_abdominale: {
    type: Number,
    default: null,
  },
  note_dbl_maille: {
    type: Number,
    default: null,
  },
  modele8: {
    type: Boolean,
    default: false,
  },
});

const sportInfoModel = mongoose.model("sportInfo", sportInfoSchema);
module.exports = sportInfoModel;
