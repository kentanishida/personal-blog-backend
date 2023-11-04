import { Injectable } from '@nestjs/common';
import { validate } from 'uuid';
import { ValidationError } from './errors.service';

@Injectable()
export class ValidateService {
  isValidateUuid({
    args,
    errors,
  }: {
    args: { [key: string]: string };
    errors: Error[];
  }): Error[] {
    Object.entries(args).forEach(([key, value]) => {
      if (!validate(value)) {
        errors.push(new ValidationError(`${key} is not URL format`));
      }
    });
    return errors;
  }

  isValidateAny({
    isValidate,
    errorMessage,
    errors,
  }: {
    isValidate: () => boolean;
    errorMessage: string;
    errors: Error[];
  }): Error[] {
    if (!isValidate()) {
      errors.push(new ValidationError(errorMessage));
    }
    return errors;
  }
}
