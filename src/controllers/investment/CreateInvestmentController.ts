import { Request, Response } from 'express';
import {
  CreateInvestmentRequestDTO,
  createValidation,
} from '../../validations/investment/createInvestmentValidation';
import { CreateInvestmentService } from '../../services/investment/CreateInvestmentService';

class CreateInvestmentController {
  async handle(request: Request, response: Response) {
    const data: CreateInvestmentRequestDTO = request.body;

    await createValidation(data);

    const createInvestmentService = new CreateInvestmentService();
    const res = await createInvestmentService.handle(data);

    response.status(201).json(res);
  }
}

export { CreateInvestmentController };
