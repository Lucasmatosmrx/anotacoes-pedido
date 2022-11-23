import { Request, Response } from 'express';

import { product } from '../../models/product';

export async function listProducts(req: Request, res: Response){
  try{
    const Produtcs = await product.find();

    res.json(Produtcs); 
  }catch (error){
    console.log(error);
    res.status(500);
  }
}