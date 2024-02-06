import { Router } from "express";
const router = Router();

import { indexwelcome } from '../controllers/index.controllers'

router.route('/')
    .get(indexwelcome);

export default router;