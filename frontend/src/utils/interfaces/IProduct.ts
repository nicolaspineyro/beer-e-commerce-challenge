export interface IProduct {
  id: number;
  brand: string;
  image: string;
  style: string;
  substyle: string;
  abv: string;
  origin: string;
  information: string;
  skus: ISku[];
}

export interface ISku {
  code: string;
  name: string;
}
