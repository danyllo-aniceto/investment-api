import { Investment } from '@prisma/client';
import prismaClient from '../../lib/prisma';
import { parseDateIso } from '../../utils/parseDateIso';
import { ApiError } from '../../validations/exceptions/ApiError';
import { CreateInvestmentRequestDTO } from '../../validations/investment/createInvestmentValidation';
import { IService } from '../../dtos/IService';
import { BaseApi } from '../../dtos/BaseApi';

class CreateInvestmentService implements IService<CreateInvestmentRequestDTO, Investment> {
  private async verifyAlreadyExistsName(name: string) {
    const existingInvestment = await prismaClient.investment.findUnique({
      where: { name },
    });

    if (existingInvestment) {
      throw new ApiError(400, 'Já existe um investimento com esse nome.');
    }
  }

  async handle(data: CreateInvestmentRequestDTO): Promise<BaseApi<Investment>> {
    await this.verifyAlreadyExistsName(data.name);

    const investment = await prismaClient.investment.create({
      data: {
        name: data.name,
        type: data.type,
        date_of_investment: parseDateIso(data.date_of_investment),
        value_invested: data.value_invested,
      },
    });

    return { status: true, message: 'Investimento criado com sucesso', data: investment };
  }
}

export { CreateInvestmentService };
