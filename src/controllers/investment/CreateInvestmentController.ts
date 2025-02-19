import { NextFunction, Request, Response } from 'express';
import {
  CreateInvestmentRequestDTO,
  createInvestmentValidation,
} from '../../validations/investment/createInvestmentValidation';
import { CreateInvestmentService } from '../../services/investment/CreateInvestmentService';
import { validationYup } from '../../validations/validationYup';
import { IController } from '../../dtos/IController';

class CreateInvestmentController implements IController {
  async handle(request: Request, response: Response) {
    const data: CreateInvestmentRequestDTO = request.body;

    await validationYup({ data, validation: createInvestmentValidation });

    const createInvestmentService = new CreateInvestmentService();
    const res = await createInvestmentService.handle(data);

    response.status(201).json(res);
  }
}

export { CreateInvestmentController };
