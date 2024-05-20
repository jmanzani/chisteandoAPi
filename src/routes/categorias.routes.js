import { Router } from "express";
import { createCategorias, getCategorias } from "../controllers/categorias.controller.js";
const router = Router()

router.get('/categorias', getCategorias);
router.post('/categorias', createCategorias);

export default router