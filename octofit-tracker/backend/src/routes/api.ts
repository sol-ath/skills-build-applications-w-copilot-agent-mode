import { Router } from 'express';

import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';

type ApiResource = 'users' | 'teams' | 'activities' | 'leaderboard' | 'workouts';

const resources: ApiResource[] = ['users', 'teams', 'activities', 'leaderboard', 'workouts'];
const resourceQueries: Record<ApiResource, () => Promise<unknown[]>> = {
  users: () => User.find().lean(),
  teams: () => Team.find().lean(),
  activities: () => Activity.find().lean(),
  leaderboard: () => LeaderboardEntry.find().sort({ rank: 1 }).lean(),
  workouts: () => Workout.find().lean(),
};

function createResourceRouter(resource: ApiResource) {
  const router = Router();

  router.get('/', async (_request, response) => {
    const data = await resourceQueries[resource]();

    response.json({ resource, data });
  });

  return router;
}

export function createApiRouter(baseUrl: string) {
  const router = Router();

  router.get('/', (_request, response) => {
    response.json({
      name: 'OctoFit Tracker API',
      status: 'ok',
      baseUrl,
      endpoints: resources.map((resource) => `${baseUrl}/api/${resource}/`),
    });
  });

  for (const resource of resources) {
    router.use(`/${resource}`, createResourceRouter(resource));
  }

  return router;
}