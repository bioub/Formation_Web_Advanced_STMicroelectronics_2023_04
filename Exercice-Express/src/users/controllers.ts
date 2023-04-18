import { NextFunction, Request, Response } from 'express';
import { UserService } from './model';

export async function listCtrl(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await UserService.find({}, 'name').limit(10);
    res.json(users);
  } catch (err) {
    next(err);
  }
}

export async function showCtrl(req: Request<{ userId: string }>, res: Response, next: NextFunction) {
  try {
    const user = await UserService.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function createCtrl(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await UserService.create(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
}
