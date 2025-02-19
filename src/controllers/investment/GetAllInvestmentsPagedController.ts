import { Request, Response } from 'express';
import { IController } from '../../dtos/IController';
import { GetAllInvestmentsPagedService } from '../../services/investment/GetAllInvestmentsPagedService';

class GetAllInvestmentsPagedController implements IController {
  async handle(request: Request, response: Response) {
    const limit = parseInt(request.query.limit as string) || 10;
    const paged = parseInt(request.query.paged as string) || 1;

    const getAllPaged = new GetAllInvestmentsPagedService();
    const res = await getAllPaged.handle({ limit, paged });

    response.status(200).json(res);
  }
}

export { GetAllInvestmentsPagedController };
