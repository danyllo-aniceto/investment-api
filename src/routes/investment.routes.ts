import { Router } from 'express';
import { CreateInvestmentController } from '../controllers/investment/CreateInvestmentController';
import { GetInvestmentByIdController } from '../controllers/investment/GetInvestmentByIdController';
import { UpdateInvestmentByIdController } from '../controllers/investment/UpdateInvestmentByIdController';
import { DeleteInvestmentByIdController } from '../controllers/investment/DeleteInvestmentByIdController';
import { GetAllInvestmentsPagedController } from '../controllers/investment/GetAllInvestmentsPagedController';

const investmentsRoutes = Router();

const createController = new CreateInvestmentController();
const getByIdController = new GetInvestmentByIdController();
const updateByIdController = new UpdateInvestmentByIdController();
const deleteByIdController = new DeleteInvestmentByIdController();
const getAllPagedController = new GetAllInvestmentsPagedController();

investmentsRoutes.post('/investments', createController.handle);
investmentsRoutes.get('/investments/:id', getByIdController.handle);
investmentsRoutes.put('/investments/:id', updateByIdController.handle);
investmentsRoutes.delete('/investments/:id', deleteByIdController.handle);
investmentsRoutes.get('/investments', getAllPagedController.handle);

export { investmentsRoutes };
