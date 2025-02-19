import { Request, Response } from 'express';

import {
  updateInvestmentByIdValidation,
  UpdateInvestmentRequestDTO,
} from '../../validations/investment/updateInvestmentByIdValidation';
import { UpdateInvestmentByIdService } from '../../services/investment/UpdateInvestmentByIdService';
import { validationIdParamsParseStringToNumber } from '../../validations/validationIdParamsParseStringToNumber';
import { validationYup } from '../../validations/validationYup';
import { IController } from '../../dtos/IController';

class UpdateInvestmentByIdController implements IController {
  async handle(request: Request, response: Response) {
    const id = validationIdParamsParseStringToNumber(request);
    const data: UpdateInvestmentRequestDTO = request.body;

    await validationYup({ data: { ...data, id }, validation: updateInvestmentByIdValidation });

    const updateInvestmentByIdService = new UpdateInvestmentByIdService();
    const res = await updateInvestmentByIdService.handle({ ...data, id });

    response.status(200).json(res);
  }
}

export { UpdateInvestmentByIdController };
