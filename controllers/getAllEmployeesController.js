const Employee = require("../models/employee");

const getAllEmployeesController = async (req, res, next) => {
  try {
    const merchants = await Merchant.find({}, "-password");

    return res.status(200).json({ data: merchants });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllEmployeesController };