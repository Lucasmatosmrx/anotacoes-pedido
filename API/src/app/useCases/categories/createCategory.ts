import { Request, Response } from 'express';

import { category } from '../../models/category';

export async function createCategory(req: Request, res: Response){
  try{
    const {icon, name} = req.body;

    if (!name){
      return res.status(400).json({
        error: 'Name is required',
      });
    }

    const Category = await category.create({icon, name});

    res.status(201).json(Category);
  } catch (error){
    console.log(error);
    res.status(500);
  }
}