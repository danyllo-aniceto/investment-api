import prismaClient from '../../lib/prisma';
import { CreateInvestmentRequestDTO } from '../../validations/investment/createInvestmentValidation';

class CreateInvestmentService {
  private parseDateIso(date: string) {
    return new Date(date).toISOString();
  }

  async handle(data: CreateInvestmentRequestDTO) {
    const investment = await prismaClient.investment.create({
      data: {
        name: data.name,
        type: data.type,
        date_of_investment: this.parseDateIso(data.dateOfInvestment),
        value_invested: data.valueInvested,
      },
    });

    return investment;
  }
}

export { CreateInvestmentService };
