const personnelModel = require("../models/personnel.model");
const sportInfoModel = require("../models/sportInfo.model");

exports.getAll = async (req, res) => {
  try {
    const data = await personnelModel.find().populate("sportinfo");
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: error,
    });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await personnelModel.findById(id).populate("sportinfo");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.create = async (req, res) => {
  const data = req.body;
  const newModel = new personnelModel(data);
  const newSportInfo = new sportInfoModel({});
  try {
    const saved = await newModel.save();
    const saveSportInfo = await newSportInfo.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const edited = await personnelModel.findByIdAndUpdate(id, data);
    res.status(200).json(edited);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await personnelModel.findByIdAndDelete(id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(400).json(error);
  }
};
