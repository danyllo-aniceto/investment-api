import { Investment } from '@prisma/client';
import { IService } from '../../dtos/IService';
import { GetAllInvestmentsPagedRequestDTO } from '../../validations/investment/getAllInvestmentsPagedValidation';
import { BaseApi } from '../../dtos/BaseApi';
import prismaClient from '../../lib/prisma';
import { BasePagedApi } from '../../dtos/BasePagedApi';

class GetAllInvestmentsPagedService
  implements IService<GetAllInvestmentsPagedRequestDTO, BasePagedApi<Investment>>
{
  async handle({
    limit,
    paged,
  }: GetAllInvestmentsPagedRequestDTO): Promise<BaseApi<BasePagedApi<Investment>>> {
    const offset = (paged - 1) * limit;

    const investments = await prismaClient.investment.findMany({
      skip: offset,
      take: limit,
      orderBy: { created_at: 'desc' },
    });

    const totalItems = await prismaClient.investment.count();
    const totalPages = Math.ceil(totalItems / limit);

    return {
      status: true,
      message: '',
      data: {
        pagination: {
          totalItems,
          totalPages,
          currentPage: paged,
          limit,
        },
        data: investments,
      },
    };
  }
}

export { GetAllInvestmentsPagedService };
