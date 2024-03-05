import { Request, Response } from "express";
import * as productsService from "../services/products.service";

export const getAll = (req: Request, res: Response) => {
  res.send(productsService.getAll());
};

export const getByIdBrand = (req: Request, res: Response) => {
  const { id, brand } = req.params;
  res.send(productsService.getByIdBrand(id, brand));
};

export const getStockPriceBySku = (req: Request, res: Response) => {
  const { sku } = req.params;

  res.send(productsService.getStockPriceBySku(sku));
};

export const updateBySku = (req: Request, res: Response) => {
  const { sku } = req.params;
  const { stock, price } = req.body;
  productsService.updateBySku(sku, stock, price);
  res.sendStatus(204);
};
