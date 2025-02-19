import * as Yup from 'yup';

export function getAllInvestmentsPagedValidation() {
  return Yup.object().shape({
    limit: Yup.number()
      .integer('Deve ser um numero inteiro')
      .min(1, 'O limite mínimo por página é 1')
      .max(100, 'O limite máximo por página é 100')
      .required('O limite é obrigatório nos parâmetros da query'),

    paged: Yup.number()
      .integer('Deve ser um numero inteiro')
      .min(1, 'A página mínimo por página é 1')
      .required('A Pagina é obrigatório nos parâmetros da query'),
  });
}

export type GetAllInvestmentsPagedRequestDTO = Yup.InferType<
  ReturnType<typeof getAllInvestmentsPagedValidation>
>;
