import { Investment } from '@prisma/client';
import { IService } from '../../dtos/IService';
import prismaClient from '../../lib/prisma';
import { BaseApi } from '../../dtos/BaseApi';

class GetInvestmentByIdService implements IService<number, Investment | null> {
  async handle(id: number): Promise<BaseApi<Investment | null>> {
    const investment = await prismaClient.investment.findFirst({ where: { id } });

    return { status: true, message: '', data: investment };
  }
}

export { GetInvestmentByIdService };
