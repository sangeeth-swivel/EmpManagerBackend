// Import the necessary modules and functions
const { Request, Response } = require('express');
const removeEmployeeHandler = require('../controller/employee.controller');
const removeEmployeeService = require('../service/employee.service');

describe('removeEmployeeHandler', () => {
  it('should remove an existing employee and return the updated employee data', async () => {
    // Create a mock request object with an employee ID in the params
    const req = new Request();
    req.params = { id: '123456789' };

    // Create a mock response object with a spy on the json() method
    const jsonSpy = jest.fn();
    const res = new Response({ json: jsonSpy });

    // Mock the removeEmployeeService function to return the updated employee data
    const updatedData = [{
        firstName: "Henri",
        lastName: "Rodriguez",
        email: "Darrin_Rippin@gmail.com",
        phone: "+94771277218",
        gender: "M",
        photo: "https://randomuser.me/api/portraits/men/92.jpg"
    }];
    removeEmployeeService.mockResolvedValueOnce(updatedData);

    // Call the removeEmployeeHandler function with the mock request and response objects
    await removeEmployeeHandler(req, res);

    // Assert that the response status is 200
    expect(res.statusCode).toBe(200);

    // Assert that the response json() method was called with the updated employee data
    expect(jsonSpy).toHaveBeenCalledWith({ employees: updatedData });

    // Assert that the removeEmployeeService function was called with the correct employee ID
    expect(removeEmployeeService).toHaveBeenCalledWith(req.params.id);
  });

  it('should return an error message when the removeEmployeeService function fails', async () => {
    // Create a mock request object with an employee ID in the params
    const req = new Request();
    req.params = { id: '123456789' };

    // Create a mock response object with a spy on the json() method
    const jsonSpy = jest.fn();
    const res = new Response({ json: jsonSpy });

    // Mock the removeEmployeeService function to throw an error
    removeEmployeeService.mockRejectedValueOnce(new Error('Database error'));

    // Call the removeEmployeeHandler function with the mock request and response objects
    await removeEmployeeHandler(req, res);

    // Assert that the response status is 400
    expect(res.statusCode).toBe(400);

    // Assert that the response json() method was called with an error message
    expect(jsonSpy).toHaveBeenCalledWith({ status: 'error', message: 'Database error' });
  });
});
