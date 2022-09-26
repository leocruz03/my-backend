import { Router } from "express";
import { getUsers, getUser, postUsers } from "../controllers/users.controllers.js";

const router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.post('/users/', postUsers);

export default router;