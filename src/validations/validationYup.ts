import * as Yup from 'yup';
import { ApiError } from './exceptions/ApiError';

interface Props<T extends Yup.Maybe<Yup.AnyObject>> {
  data: T;
  validation: () => Yup.ObjectSchema<T>;
}

export async function validationYup<T extends Yup.Maybe<Yup.AnyObject>>({
  data,
  validation,
}: Props<T>) {
  try {
    await validation().validate(data, { abortEarly: false });
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      throw new ApiError(400, error.errors.join(', '));
    }
    throw new ApiError(400, error as string);
  }
}
