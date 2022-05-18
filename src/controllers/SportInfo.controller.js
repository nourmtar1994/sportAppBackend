const SportInfoModel = require("../models/sportInfo.model");

exports.getAll = async (req, res) => {
  try {
    const data = await SportInfoModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await SportInfoModel.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.create = async (req, res) => {
  const data = req.body;
  const newModel = new SportInfoModel(data);
  try {
    const saved = await newModel.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const edited = await SportInfoModel.findByIdAndUpdate(id, data);
    res.status(200).json(edited);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await SportInfoModel.findByIdAndDelete(id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(400).json(error);
  }
};
