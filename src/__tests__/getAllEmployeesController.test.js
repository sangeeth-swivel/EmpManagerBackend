const { Request, Response } = require('express');
const getAllEmployeesHandler = require('../controller/employee.controller');
const getAllEmployeesService = require('../service/employee.service');

describe('getAllEmployeesHandler', () => {
  it('should return all employees with a status code of 200 and a success message', async () => {
    // Mock the `getAllEmployeesService` function to return a list of employees
    const mockEmployees = [
      {
        firstName: "Henri",
        lastName: "Rodriguez",
        email: "Darrin_Rippin@gmail.com",
        phone: "+94771277218",
        gender: "M",
        photo: "https://randomuser.me/api/portraits/men/92.jpg"
    },
    {
        firstName: "Lindsay",
        lastName: "Herman",
        email: "Ewald.Kunde@gmail.com",
        phone: "+94771274218",
        gender: "F",
        photo: "https://randomuser.me/api/portraits/men/30.jpg"
    }];      
    getAllEmployeesService.mockResolvedValue(mockEmployees);

    // Mock the `json` and `status` methods of the `Response` object
    const mockJson = jest.fn();
    const mockStatus = jest.fn().mockReturnValue({ json: mockJson });
    const res = { status: mockStatus };

    // Call the function with mock `Request` and `Response` objects
    const req = new Request();
    await getAllEmployeesHandler(req, res);

    // Expect the `json` and `status` methods of the `Response` object to have been called with the correct arguments
    expect(mockJson).toHaveBeenCalledWith({ employees: mockEmployees, message: 'success' });
    expect(mockStatus).toHaveBeenCalledWith(200);
  });

  it('should return a status code of 400 and an error message if there is an error with the database query', async () => {
    // Mock the `getAllEmployeesService` function to throw an error
    const mockError = new Error('Database query failed');
    getAllEmployeesService.mockRejectedValue(mockError);

    // Mock the `json` and `status` methods of the `Response` object
    const mockJson = jest.fn();
    const mockStatus = jest.fn().mockReturnValue({ json: mockJson });
    const res = { status: mockStatus };

    // Call the function with mock `Request` and `Response` objects
    const req = new Request();
    await getAllEmployeesHandler(req, res);

    // Expect the `json` and `status` methods of the `Response` object to have been called with the correct arguments
    expect(mockJson).toHaveBeenCalledWith({ status: 'error', message: mockError.message });
    expect(mockStatus).toHaveBeenCalledWith(400);
  });
});
