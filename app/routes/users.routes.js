import { Router } from "express";
import * as userController from "../controllers/users.controller";
const router = Router();

router.post(`/`, userController.createUser);

router.get(`/`, );

router.get(`/ping`, );

router.get(`/:id`,);

router.put(`/:id`, );

router.delete(`/:id`, );

export default router;

