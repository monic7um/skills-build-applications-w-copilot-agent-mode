import { Router } from 'express';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';

type ResourceName = 'users' | 'teams' | 'activities' | 'leaderboard' | 'workouts';
type ResourceModel = typeof User;

function createResourceRouter(resource: ResourceName, model: ResourceModel): Router {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      const data = await model.find().lean();
      response.json({ resource, data });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', (request, response) => {
    response.status(201).json({ resource, data: request.body });
  });

  return router;
}

const apiRouter = Router();

apiRouter.use('/users', createResourceRouter('users', User));
apiRouter.use('/teams', createResourceRouter('teams', Team));
apiRouter.use('/activities', createResourceRouter('activities', Activity));
apiRouter.use('/leaderboard', createResourceRouter('leaderboard', LeaderboardEntry));
apiRouter.use('/workouts', createResourceRouter('workouts', Workout));

export default apiRouter;