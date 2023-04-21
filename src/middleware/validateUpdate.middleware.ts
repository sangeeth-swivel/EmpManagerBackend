import { Request, Response, NextFunction } from "express";
import { updateEmployeeSchema } from "../schema/employee.schema";

const validateUpdateEmployeeMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = updateEmployeeSchema.validate(req.body);
  console.log(req.body);
  if (error) {
    return res
      .status(422)
      .json({ status: "error", error: " Unprocessable Entity" });
  }

  next();
};

export default validateUpdateEmployeeMiddleware;
