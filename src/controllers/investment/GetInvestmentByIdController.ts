import { Request, Response } from 'express';

import { GetInvestmentByIdService } from '../../services/investment/GetInvestmentByIdService';
import { validationIdParamsParseStringToNumber } from '../../validations/validationIdParamsParseStringToNumber';
import { IController } from '../../dtos/IController';

class GetInvestmentByIdController implements IController {
  async handle(request: Request, response: Response) {
    const id = validationIdParamsParseStringToNumber(request);

    const getInvestmentByIdService = new GetInvestmentByIdService();
    const res = await getInvestmentByIdService.handle(id);

    response.status(200).json(res);
  }
}

export { GetInvestmentByIdController };
