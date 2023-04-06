import EmployeeModel from "../models/employee.model";
import { iEmployee } from "../models/employee.model";
import log from "../utils/logger";

const getAllEmployeesService = async () => {
  try {
    const employees = await EmployeeModel.find();
    return employees;
  } catch (err: any) {
    log.info(err);
    throw err.message;
  }
};
const getEmployeeByIdService = async (id: string) => {
  try {
    const employee = EmployeeModel.findById(id);
    return employee;
  } catch (err: any) {
    log.info(err);
    throw err.message;
  }
};
const createEmployeeService = async (employee: iEmployee) => {
  try {
    const result = await EmployeeModel.create(employee);
    return result;
  } catch (err: any) {
    if (err.code === 11000) {
      throw "This email is already taken";
    } else {
      log.info(err);
      throw err.message;
    }
  }
};

const updateEmployeeService = async (employee: iEmployee) => {
  const { _id, firstName, lastName, email, phone, gender, photo } = employee;

  try {
    const update = await EmployeeModel.findByIdAndUpdate(_id, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      gender: gender,
      photo: photo,
    });

    return update;
  } catch (err: any) {
    log.info(err);
    throw err.message;
  }
};

const removeEmployeeService = async (id: string) => {
  try {
    const deleteEmployee = await EmployeeModel.findByIdAndDelete(id);
    const updatedData = await EmployeeModel.find();
    return updatedData;
  } catch (err: any) {
    log.info(err);
    throw err.message;
  }
};

export {
  createEmployeeService,
  getAllEmployeesService,
  getEmployeeByIdService,
  updateEmployeeService,
  removeEmployeeService,
};
