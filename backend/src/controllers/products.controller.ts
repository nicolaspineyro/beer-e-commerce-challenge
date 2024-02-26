import { Request, Response } from "express";
import * as productsService from '../services/products.service';

export const getAll = (req: Request, res: Response) => {
  console.log('getAll');

  res.send(productsService.getAll());
}

export const getByIdBrand = (req: Request, res: Response) => {
  console.log('getByIdBrand');

  const { id, brand } = req.params;
  console.log(id, brand);

  res.send(productsService.getByIdBrand(id, brand));
}

export const getStockPriceBySku = (req: Request, res: Response) => {
  console.log('getStockPriceBySku');

  const { sku } = req.params;

  res.send(productsService.getStockPriceBySku(sku));
}

export const updateBySku = (req: Request, res: Response) => {
  console.log('updateBySku');

  const { sku } = req.params;
  const { stock, price } = req.body;
  productsService.updateBySku(sku, stock, price);
  res.sendStatus(204);
}
