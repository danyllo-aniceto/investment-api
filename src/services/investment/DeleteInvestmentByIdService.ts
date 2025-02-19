import { Investment } from '@prisma/client';
import { IService } from '../../dtos/IService';
import { BaseApi } from '../../dtos/BaseApi';
import prismaClient from '../../lib/prisma';
import { ApiError } from '../../validations/exceptions/ApiError';

class DeleteInvestmentByIdService implements IService<number, Investment> {
  private async verifyAlreadyExists(id: number) {
    const existingInvestment = await prismaClient.investment.findUnique({
      where: { id },
    });

    if (!existingInvestment) {
      throw new ApiError(400, 'Não é possível deletar um investimento inexistente');
    }
  }

  async handle(id: number): Promise<BaseApi<Investment>> {
    await this.verifyAlreadyExists(id);

    const investment = await prismaClient.investment.delete({ where: { id } });

    return { status: true, message: 'Investimento deletado com sucesso', data: investment };
  }
}

export { DeleteInvestmentByIdService };
