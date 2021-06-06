import {Request, Response, NextFunction, Router } from 'express';
import {getAll, save, get, deleteTask, update} from './task.service';



 const router:Router = Router({mergeParams: true});
router.route('/').get(
  async (req:Request, res:Response) => {
    try {
      const tasks = await getAll(req.params.id);
      res.status(200).json(tasks);
    }
    catch (error) { res.status(401).json('Access token is missing or invalid');
    }
  });


router.route('/').post(
  async (req:Request, res:Response) => {
    try {
      const task = await save({
        "title": req.body.title,
        "order": req.body.order,
        "description": req.body.description,
        "userId":req.body.userId ,
        "boardId":req.params.id,
        "columnId": req.body.columnId
      });
       res.status(201).json(task);
    }
    catch (error) { res.status(400).send('Bad request');
    }
  }
);

router.route('/:id').get(
  async (req: Request, res : Response, next:NextFunction ) => {
    try {
      const task  = await get(req.params.id);
      if (task) {
        return  res.status(200).json(task);
      }
      return res.status(404).send('Not Found');
    }
    catch (error) {
      return next(error);
    }

  }
);

router.route('/:id').delete(
  async (req:Request, res:Response,) => {
    try {
      const Done = await deleteTask(req.params.id);
      res.status(204).send(Done);
    }
    catch (error) {res.status(404).send('Task not found');
    }
  }
);

router.route('/:TaskId').put(
  async (req:Request, res:Response) => {
    try {
      const task = await update(req.params.id, req.body);
      res.status(200).json(task);
    }
    catch (error) {res.status(400).send('Bad request');
    }
  }
);

export default router;