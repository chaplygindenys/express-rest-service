import {Request, Response, Router } from 'express';
import {getAll, save, get, remove,update} from './board.service';
import {removeBoardsTasks} from '../tasks/task.service';

const router:Router = Router();



router.route('/').get(
  async (req:Request, res: Response) => {
    try {
      const boards = await getAll();
      res.status(200).json(boards);
    } catch (error) {
      res.status(401).send('Access token is missing or invalid');
    }
  });


router.route('/').post(
  async (req:Request, res: Response) => {
    try {
      const board = await save(req.body.title, req.body.columns );
      res.status(201).json(board);
    } catch (error) {
      res.status(400).send('Bad request');
    }
  }
);




router.route('/:id').get(
  async (req:Request, res: Response) => {
    try {
      const board = await get(req.params.id);
      res.status(200).json(board);
    } catch (error) {
      res.status(404).send('Not Found');
    }
  }
);




router.route('/:id').delete(
  async (req:Request, res: Response) => {
    try {
      const Done = await remove(req.params.id);
      await removeBoardsTasks(req.params.id);
      res.status(204).json(Done);
    } catch (error) {
      res.status(404).send(error);
    }
  });


router.route('/:id').put(
  async (req:Request, res: Response) => {
    try {
      const board = await update(req.params.id, req.body.title, req.body.columns);
      res.status(200).json(board);
    } catch (error) {
      res.status(400).send('Bad request');
    }
  });

export default router;