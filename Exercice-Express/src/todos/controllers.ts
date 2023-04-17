import { NextFunction, Request, Response } from 'express';
import { TodoService } from './model';

export async function listCtrl(req: Request, res: Response, next: NextFunction) {
  try {
    const todos = await TodoService.find();
    res.json(todos);
  } catch (err) {
    next(err);
  }
}

export async function showCtrl(req: Request, res: Response, next: NextFunction) {
  try {
    const todo = await TodoService.findById(req.params.todoId);

    if (!todo) {
      return next();
    }

    res.json(todo);
  } catch (err) {
    next(err);
  }
}

export async function createCtrl(req: Request, res: Response, next: NextFunction) {
  try {
    const todo = await TodoService.create(req.body);
    res.json(todo);
  } catch (err) {
    next(err);
  }
}

export async function deleteCtrl(req: Request, res: Response, next: NextFunction) {
  try {
    const todo = await TodoService.findByIdAndDelete(req.params.todoId);

    if (!todo) {
      return res.status(404).json({
        msg: 'Todo not found',
      });
    }

    res.json(todo);
  } catch (err) {
    next(err);
  }
}

export async function updateCtrl(req: Request, res: Response, next: NextFunction) {
  try {
    const todo = await TodoService.findByIdAndUpdate(req.params.todoId, req.body);

    if (!todo) {
      return res.status(404).json({
        msg: 'Todo not found',
      });
    }

    res.json(todo);
  } catch (err) {
    next(err);
  }
}

export async function replaceCtrl(req: Request, res: Response, next: NextFunction) {
  try {
    const todo = await TodoService.findOneAndReplace({ _id: req.params.todoId }, req.body);

    if (!todo) {
      return res.status(404).json({
        msg: 'Todo not found',
      });
    }

    res.json(todo);
  } catch (err) {
    next(err);
  }
}
