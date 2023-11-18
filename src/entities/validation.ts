import { validate } from 'uuid';
import { ValidationError } from '../errors/errors';

export class ValidateService {
  isUuid({
    args,
    errors,
  }: {
    args: { [key: string]: string };
    errors: Error[];
  }): Error[] {
    Object.entries(args).forEach(([key, value]) => {
      if (!validate(value)) {
        errors.push(
          new ValidationError(`${key} : ${value} is not uuid format`),
        );
      }
    });
    return errors;
  }
}
