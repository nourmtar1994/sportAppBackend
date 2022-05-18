const armyModel = require("../models/army.model");

exports.getAll = async (req, res) => {
  try {
    const data = await armyModel.find().populate("unities");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await armyModel.findById(id).populate("unities");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.create = async (req, res) => {
  const data = req.body;
  const newModel = new armyModel(data);
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
    const edited = await armyModel.findByIdAndUpdate(id, data);
    res.status(200).json(edited);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await armyModel.findByIdAndDelete(id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(400).json(error);
  }
};
