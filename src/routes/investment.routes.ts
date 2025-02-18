import { Router } from 'express';
import { CreateInvestmentController } from '../controllers/investment/CreateInvestmentController';

const investmentsRoutes = Router();

const createController = new CreateInvestmentController();

investmentsRoutes.post('/investments', createController.handle);

export { investmentsRoutes };
