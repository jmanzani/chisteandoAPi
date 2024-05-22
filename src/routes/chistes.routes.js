import { Router } from "express";
import { createChiste, getChiste, getChisteContains, getChistes } from "../controllers/chistes.controller";
const router = Router()

router.get('/chiste/id', getChiste);
router.get('/chiste/contiene', getChisteContains);
router.get('/chiste', getChistes);
router.post('/chiste', createChiste);

export default router