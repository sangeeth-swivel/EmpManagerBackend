module.exports = (app) => {
    const employees = require('../controllers/employee.controller.js');

    // Create a new employee
    app.post('/employee/add', employees.addEmployee);

    // Retrieve all employees
    app.get('/employee/list', employees.findAllEmployee);

    // Retrieve a single employee with employeeId
    app.get('/employee/:empId', employees.findOneEmployee);

    // Update a employee with employeeId
    app.put('/employee/edit/:empId', employees.updateEmployee);

    // Delete a employee with employeeId
    app.delete('/employee/delete/:empId', employees.deleteEmployee);
}
