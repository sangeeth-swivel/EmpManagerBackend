const Employee = require("../models/employee.model");
const {
  createEmployeeSchema,
  updateEmployeeSchema,
  reqParamasSchemaId,
} = require("../helper/validation.schema");

// Create and Save a new Employee
exports.addEmployee = async (req, res) => {
  const employee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    photo: req.body.photo,
  });

  // Save Employee in the database
  employee
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee.",
      });
    });
};

// Retrieve and return all Employees from the database.
exports.findAllEmployee = (req, res) => {
  Employee.find()
    .then((employees) => {
      res.send(employees);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees.",
      });
    });
};

// Find a single Employee with a EmployeeId
exports.findOneEmployee = (req, res) => {
  const empId = req.params.id;
  Employee.findById(req.params.id)
    .then((employee) => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found with id " + empId,
        });
      }
      res.send(employee);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Employee not found with id " + empId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving employee with id " + empId,
      });
    });
};

// Update a Employee identified by the EmployeeId in the request
exports.updateEmployee = (req, res) => {
  const empId = req.params.id;

  // Find employee and update it with the request body
  Employee.findByIdAndUpdate(
    empId,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
      photo: req.body.photo,
    },
    { new: true }
  )
    .then((employee) => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found with id " + empId,
        });
      }
      res.send(employee);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Employee not found with id " + empId,
        });
      }
      return res.status(500).send({
        message: "Error updating employee with id " + empId,
      });
    });
};

// Delete a Employee with the specified EmployeeId in the request
exports.deleteEmployee = (req, res) => {
  const empId = req.params.id;

  Employee.findByIdAndRemove(req.params.id)
    .then((employee) => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found with id " + empId,
        });
      }
      res.send({ message: "Employee deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Employee not found with id " + empId,
        });
      }
      return res.status(500).send({
        message: "Could not delete employee with id " + empId,
      });
    });
};
