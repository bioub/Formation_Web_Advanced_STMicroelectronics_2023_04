import express, { Router } from 'express';
import { createCtrl, listCtrl, showCtrl } from './controllers';

export const usersRouter = Router();

usersRouter.get('', listCtrl);
usersRouter.get('/:userId', showCtrl);
usersRouter.post('', express.json(), createCtrl);
