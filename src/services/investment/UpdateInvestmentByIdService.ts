import { Investment } from '@prisma/client';
import { IService } from '../../dtos/IService';
import prismaClient from '../../lib/prisma';
import { parseDateIso } from '../../utils/parseDateIso';
import { UpdateInvestmentRequestDTO } from '../../validations/investment/updateInvestmentByIdValidation';
import { BaseApi } from '../../dtos/BaseApi';
import { ApiError } from '../../validations/exceptions/ApiError';

class UpdateInvestmentByIdService implements IService<UpdateInvestmentRequestDTO, Investment> {
  private async verifyAlreadyExists(id: number, name: string) {
    const existingInvestment = await prismaClient.investment.findUnique({
      where: { id, name },
    });

    if (!existingInvestment) {
      throw new ApiError(
        400,
        'Não é possível atualizar um investimento inexistente, verifique o nome e id passado',
      );
    }
  }

  async handle(data: UpdateInvestmentRequestDTO): Promise<BaseApi<Investment>> {
    await this.verifyAlreadyExists(data.id, data.name);

    const investment = await prismaClient.investment.update({
      where: { id: data.id, name: data.name },
      data: {
        type: data.type,
        value_invested: data.value_invested,
        date_of_investment: data?.date_of_investment
          ? parseDateIso(data.date_of_investment)
          : undefined,
      },
    });

    return { status: true, message: 'Investimento atualizado com sucesso', data: investment };
  }
}

export { UpdateInvestmentByIdService };
