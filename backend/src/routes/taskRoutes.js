import express from "express";
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import limiter from "../middleware/limiterMiddleware.js";
import auth from "../middleware/authMiddleware.js";
import validate from "../middleware/validationMiddleware.js";
import {
  createTaskSchema,
  updateTaskSchema,
} from "../schemas/validationSchema.js";

const router = express.Router();

router.use(limiter);
router.use(auth);

router.get("/", getAllTasks);
router.get("/:id", getTaskById);

router.post("/", validate(createTaskSchema), createTask);

router.patch("/:id", validate(updateTaskSchema), updateTask);

router.delete("/:id", deleteTask);

export default router;
