import { Router } from "express";
import * as userController from "../controllers/users.controller";
const router = Router();

router.post(`/user/`, userController.createUser);

router.get(`/user/`, userController.listUser);

router.get(`/user/ping`, userController.pingUser);

router.get(`/user/:id`,userController.findUser);

router.put(`/user/:id`, userController.updateUser);

router.delete(`/user/:id`,userController.deleteUser);

export default router;

