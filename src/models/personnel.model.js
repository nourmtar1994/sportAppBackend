const mongoose = require("mongoose");
const { Schema } = mongoose;

const personnelSchema = new Schema({
  matricule: {
    type: String,
    required: true,
  },
  matr_corps: {
    type: String,
  },
  grade: {
    type: String,
  },
  iu: {
    type: String,
  },
  cin: {
    type: String,
  },
  cim: {
    type: String,
  },
  prenom: {
    type: String,
  },
  nom: {
    type: String,
  },
  Situation_familiale: {
    type: String,
  },
  date_naissance: {
    type: String,
  },
  Lieu_naiss: {
    type: String,
  },
  specialite: {
    type: String,
  },
  qualification: {
    type: String,
  },
  date_entr_serv: {
    type: String,
  },
  date_deb_contrat: {
    type: String,
  },
  date_fin_contrat: {
    type: String,
  },
  adresse: {
    type: String,
  },
  telephone: {
    type: String,
  },
  telephone2: {
    type: String,
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: "service",
  },
  Position: {
    type: String,
  },
  obsrv: {
    type: String,
  },
  Idunique: {
    type: String,
  },
  Passp1: {
    type: String,
  },
  Passp2: {
    type: String,
  },
  Famille: {
    type: String,
  },
  secteur: {
    type: String,
  },
  categ: {
    type: String,
  },
  DTEFINCIM: {
    type: String,
  },
  sportinfo: {
    type: Schema.Types.ObjectId,
    ref: "sportInfo",
  },
});

const personnelModel = mongoose.model("personnel", personnelSchema);
module.exports = personnelModel;
