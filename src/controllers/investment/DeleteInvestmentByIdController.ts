import { Request, Response } from 'express';
import { IController } from '../../dtos/IController';
import { validationIdParamsParseStringToNumber } from '../../validations/validationIdParamsParseStringToNumber';
import { DeleteInvestmentByIdService } from '../../services/investment/DeleteInvestmentByIdService';

class DeleteInvestmentByIdController implements IController {
  async handle(request: Request, response: Response) {
    const id = validationIdParamsParseStringToNumber(request);

    const deleteInvestmentByIdService = new DeleteInvestmentByIdService();
    const res = await deleteInvestmentByIdService.handle(id);

    response.status(200).json(res);
  }
}

export { DeleteInvestmentByIdController };
