import {Request, Response, NextFunction, Router } from 'express';
import {User} from './user.model';
import {removeUsersTasks} from '../tasks/task.service';

import { postUser, getAllUsers,getUser,putUser, deleteUser } from './user.service';

const router:Router = Router();


// import {taskService} from '../tasks/task.service.ts');


router.route('/').get(
  async (req:Request, res : Response) => {
    try {
       if(req.params){console.log(req.params)}
      const users = await getAllUsers();
      res.status(200).json(users.map(User.toResponse));
    }
    catch (error){res.status(401).json('Access token is missing or invalid');
    }
  });

router.route('/:id').get(
  async (req: Request, res : Response, next:NextFunction ) => {
    try {
      const user = await getUser(req.params.id);
      if (user) {
     return  res.status(200).json(User.toResponse(user));
      }
     return res.status(404).send('Not Found');
    }
    catch (error) {
      return next(error);
    }

  }
);

router.route('/').post(
  async (req: Request, res : Response) => {
    try {
      const user = await postUser(req.body.name, req.body.login, req.body.password);
      res.status(201).json(user);
    }
    catch (error) {res.status(400).send('Bad request');
    }
  }
);

router.route('/:id').put(
  async (req: Request, res : Response) => {
    try {
      const user = await putUser(req.params.id, req.body.name, req.body.login, req.body.password);
       res.status(200).json(user);
    }
    catch (error) { res.status(400).send('Bad request');
    }
  });

router.route('/:id').delete(
  async (req: Request, res : Response) => {
    try {
         await deleteUser(req.params.id);
         await removeUsersTasks(req.params.id);
         res.status(204).send('The User has been deleted');
    }
    catch (error) { res.status(404).send('User not found');
    }
  }
);

export default router;
