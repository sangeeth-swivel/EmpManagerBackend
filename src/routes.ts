import express from "express";
import {
  getAllEmployeesHandler,
  createEmployeeHandler,
  getEmployeeByIdHandler,
  updateEmployeeHandler,
  removeEmployeeHandler,
  empTesting,
} from "./controller/employee.controller";
import validateParamsMiddleware from "./middleware/validateParams.middleware";
import validateAddEmployeeMiddleware from "./middleware/validateAdd.middleware";
import validateUpdateEmployeeMiddleware from "./middleware/validateUpdate.middleware";

const router = express.Router();

router.get("/", getAllEmployeesHandler);
router.post("/create", createEmployeeHandler);

router.get(
  "/getEmployee/:id",
  validateParamsMiddleware,
  getEmployeeByIdHandler
);

router.delete(
  "/deleteEmployee/:id",
  validateParamsMiddleware,
  removeEmployeeHandler
);

router.post("/", validateAddEmployeeMiddleware, createEmployeeHandler);

router.post("/update", validateUpdateEmployeeMiddleware, updateEmployeeHandler);

router.get("/testing", empTesting);

export default router;
