const Employee = require("../models/Employee");

const addEmployeeController = async (req, res) => {
    const emp = new Employee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
      empId: req.body.empId,
      photo: req.body.photo,
    });
  
    try {
      const result = await addEmployeeService(emp);
      res.status(200).json({ message: "Successfully added" });
    } catch (err) {
      console.log(err);
    }
  };
  
  module.exports = { addEmployeeController };