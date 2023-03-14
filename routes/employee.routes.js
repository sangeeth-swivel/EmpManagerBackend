const express = require("express");
const router = express.Router();
const employees = require("../controllers/employee.controller.js");

router.post("/add", employees.addEmployee);

router.get("/list", employees.findAllEmployee);

router.get('/:empId', employees.findOneEmployee);

router.put('/edit/:empId', employees.updateEmployee);

router.delete('/delete/:empId', employees.deleteEmployee);

module.exports = router;
