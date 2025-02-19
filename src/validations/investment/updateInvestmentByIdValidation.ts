import { InvestmentType } from '@prisma/client';
import * as Yup from 'yup';

export function updateInvestmentByIdValidation() {
  return Yup.object().shape({
    id: Yup.number().required('Id é obrigatório no parametro da requisição'),
    name: Yup.string().required('Nome do investimento é obrigatório'),
    type: Yup.mixed<InvestmentType>()
      .oneOf(
        Object.values(InvestmentType),
        'Tipo de investimento inválido. Tipos válidos: (ACTION, FUND, TITLE)',
      )
      .optional(),
    value_invested: Yup.number().min(0, 'O valor investido não pode ser negativo').optional(),
    date_of_investment: Yup.string()
      .matches(
        /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/,
        'A data de investimento deve estar no formato YYYY-MM-DD hh:mm',
      )
      .optional(),
  });
}

export type UpdateInvestmentRequestDTO = Yup.InferType<
  ReturnType<typeof updateInvestmentByIdValidation>
>;
