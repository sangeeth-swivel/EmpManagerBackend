import { Request, Response, NextFunction } from "express";
import { reqParamasSchemaId } from "../schema/employee.schema";

const validateParamsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = reqParamasSchemaId.validate(req.params.id);

  if (error) {
    return res
      .status(422)
      .json({ status: "error", error: " Unprocessable Entity" });
  }

  next();
};

export default validateParamsMiddleware;
