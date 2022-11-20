import { Request, Response } from 'express';

import { category } from '../../models/category';

export async function listCategories(req: Request, res: Response){
  const categories = await category.find();

  res.json(categories); 
}