import { InvestmentType } from '@prisma/client';
import { BasePagedApi } from '../BasePagedApi';

interface GetInvestment {
  name: string;
  type: InvestmentType;
  value_invested: number;
  date_of_investment: string;
}

export interface GetPagedInvestmentResponseDTO extends BasePagedApi<GetInvestment> {}
