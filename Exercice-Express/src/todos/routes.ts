
import express from 'express'
import { Router } from "express";
import { TodoService } from "./model";
import { createCtrl, deleteCtrl, listCtrl, replaceCtrl, showCtrl, updateCtrl } from "./controllers";

export const todosRouter = Router();

// GET /api/todos
todosRouter.get('', listCtrl);

// GET /api/todos/:todoId
todosRouter.get('/:todoId', showCtrl);

// POST /api/todos
todosRouter.post('', express.json(), createCtrl);

// DELETE /api/todos/:todoId
todosRouter.delete('/:todoId', deleteCtrl);

// PATCH /api/todos/:todoId
todosRouter.patch('/:todoId', express.json(), updateCtrl);

// PUT /api/todos/:todoId
todosRouter.put('/:todoId', express.json(), replaceCtrl);

