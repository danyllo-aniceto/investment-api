import * as Yup from 'yup';
import { InvestmentType } from '@prisma/client';

export function createInvestmentValidation() {
  return Yup.object().shape({
    name: Yup.string().required('O nome do investimento é obrigatório'),
    type: Yup.mixed<InvestmentType>()
      .oneOf(
        Object.values(InvestmentType),
        'Tipo de investimento inválido. Tipos válidos: (ACTION, FUND, TITLE)',
      )
      .required('O tipo de investimento é obrigatório'),
    valueInvested: Yup.number()
      .min(0, 'O valor investido não pode ser negativo')
      .required('O valor investido é obrigatório'),
    dateOfInvestment: Yup.string()
      .matches(
        /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/,
        'A data de investimento deve estar no formato YYYY-MM-DD hh:mm',
      )
      .required('A data do investimento é obrigatória'),
  });
}

export type CreateInvestmentRequestDTO = Yup.InferType<
  ReturnType<typeof createInvestmentValidation>
>;
