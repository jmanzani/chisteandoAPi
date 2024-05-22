import { Router } from "express";
import { createCategorias, getCategorias, getCategoria } from "../controllers/categorias.controller.js";
const router = Router()

router.get('/categorias', getCategorias);
router.get('/categorias/id', getCategoria);
router.post('/categorias', createCategorias);

export default router