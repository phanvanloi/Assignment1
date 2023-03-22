import express from "express";
import { create, get, getAll, remove, update } from "../cotrollers/product";

const router = express.Router()

router.get('/products', getAll)
router.get('/product/:id', get)
router.post('/products', create)
router.delete('/product/:id', remove)
router.put('/product/:id', update)

export default router