import { Router } from "express";
import { getAll, getByIdBrand, getStockPriceBySku, updateBySku } from '../controllers/products.controller';

const productsRouter = Router();

//GET
productsRouter.get('/', getAll);
productsRouter.get('/stock-price/:sku', getStockPriceBySku);
productsRouter.get('/:id-:brand', getByIdBrand);

//PUT
productsRouter.put("/:sku", updateBySku);

export default productsRouter;