import Joi from "joi";

const phoneNumberRegex = /^(0|94|\+94)?7\d{8}$/

const mongooseIdRegex = /^[a-fA-F0-9]{24}$/;

const createEmployeeSchema = Joi.object({
  firstName: Joi.string().min(6).max(10).required(),
  lastName: Joi.string().min(6).max(10).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().regex(phoneNumberRegex),
  gender: Joi.string(),
  photo: Joi.string(),
});

const reqParamasSchemaId = Joi.string().regex(mongooseIdRegex).required();

const updateEmployeeSchema = Joi.object({
  _id: Joi.string(),
  firstName: Joi.string().min(6).max(10).required(),
  lastName: Joi.string().min(6).max(10).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().regex(phoneNumberRegex),
  gender: Joi.string(),
  photo: Joi.string(),
});

export { createEmployeeSchema, updateEmployeeSchema, reqParamasSchemaId };
