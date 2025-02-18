import { Request, Response, Router } from 'express';
import { investmentsRoutes } from './investment.routes';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome investments api' });
});

router.use(investmentsRoutes);

export { router };
