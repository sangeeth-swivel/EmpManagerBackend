// Import the necessary modules and functions
const { Request, Response } = require('express');
const createEmployeeHandler = require('../controller/employee.controller');
const createEmployeeService = require('../service/employee.service');

describe('createEmployeeHandler', () => {
  it('should create a new employee and return a success message', async () => {
    // Create a mock request object with a body containing employee data
    const req = new Request();
    req.body = {
        firstName: "Lindsay",
        lastName: "Herman",
        email: "Ewald.Kunde@gmail.com",
        phone: "+94771274218",
        gender: "F",
        photo: "https://randomuser.me/api/portraits/men/30.jpg"
    };

    // Create a mock response object with a spy on the json() method
    const jsonSpy = jest.fn();
    const res = new Response({ json: jsonSpy });

    // Mock the createEmployeeService function to return the new employee data
    createEmployeeService.mockResolvedValueOnce(req.body);

    // Call the createEmployeeHandler function with the mock request and response objects
    await createEmployeeHandler(req, res);

    // Assert that the response status is 200
    expect(res.statusCode).toBe(200);

    // Assert that the response json() method was called with a success message
    expect(jsonSpy).toHaveBeenCalledWith({ message: 'success' });
  });

  it('should return an error message when the createEmployeeService function fails', async () => {
    // Create a mock request object with a body containing employee data
    const req = new Request();
    req.body = { name: 'John Doe', age: 35, position: 'Manager' };

    // Create a mock response object with a spy on the json() method
    const jsonSpy = jest.fn();
    const res = new Response({ json: jsonSpy });

    // Mock the createEmployeeService function to throw an error
    createEmployeeService.mockRejectedValueOnce(new Error('Database error'));

    // Call the createEmployeeHandler function with the mock request and response objects
    await createEmployeeHandler(req, res);

    // Assert that the response status is 400
    expect(res.statusCode).toBe(400);

    // Assert that the response json() method was called with an error message
    expect(jsonSpy).toHaveBeenCalledWith({ status: 'error', message: 'Database error' });
  });
});
