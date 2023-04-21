import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail";

const regex = /^(0|94|\+94)?7\d{8}$/;

export interface IEmployee {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: "M" | "F";
  photo: string;
}
const employeeSchema = new mongoose.Schema<IEmployee>({
  firstName: {
    type: String,
    required: [true, "Please enter firstname"],
  },
  lastName: {
    type: String,
    required: [true, "Plese enter a lastname"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  phone: {
    type: String,
    required: [true, "Please enter a phone number"],
    match: [regex, "Please match the phone number"],
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ["M", "F"],
      message: "{VALUE} is not supported",
    },
  },

  photo: {
    type: String,
  },
});

const EmployeeModel = mongoose.model<IEmployee>("Employee", employeeSchema);

export default EmployeeModel;
