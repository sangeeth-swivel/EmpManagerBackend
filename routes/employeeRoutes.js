const express = require("express");
const { ObjectId } = require("mongodb");
const router = express.Router();
const Employee = require("../models/employee");

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.post("/add", async (req, res) => {
  const employee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    empId: req.body.empId,
    photo: req.body.photo,
  });
  try {
    const message = await employee.save();
    res.json(message);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.post("/:id", async (req, res, emp) => {
  const { empId, firstName, lastName, email, phone, gender, photo } = emp;
  try {
    const employee = await Employee.findByIdAndUpdate(empId, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      gender: gender,
      photo: photo,
    });
    const message = await employee.save();
    res.status(200).json({ message: "success" });
    res.send("success");
    res.json(message);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("employee")
      .delete({ _id: ObjectId(req.params.id) })
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch((err) => {
        res.status(500).json({ error: "couldn't detelet the document" });
      });
  } else {
    res.status(500).json({ error: "Not a valid doc ID" });
  }
});

module.exports = router;
