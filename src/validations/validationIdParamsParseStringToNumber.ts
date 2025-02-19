import { Request } from 'express';
import { ApiError } from '../validations/exceptions/ApiError';

export function validationIdParamsParseStringToNumber(request: Request) {
  const { id } = request.params;

  const parsed = Number(id);

  if (Number.isInteger(parsed) && isFinite(parsed)) {
    return parsed;
  }

  throw new ApiError(400, 'O id do parametro da requisição deve ser numero inteiro');
}
