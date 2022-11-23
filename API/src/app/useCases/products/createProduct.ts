import { Request, Response } from 'express';

import { product } from '../../models/product';

export async function createProduct(req: Request, res: Response){
  try{
    
    
  } catch (error){
    console.log(error);
    res.status(500);
  }
}