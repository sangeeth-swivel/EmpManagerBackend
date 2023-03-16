const { isEmail } = require("validator");
const mongoose = require("mongoose");
const regex =
  /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter First Name"],
  },
  lastName: {
    type: String,
    required: [true, "Plese enter Last Name"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  phone: {
    type: String,
    required: [true, "Please enter phone number"],
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

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
