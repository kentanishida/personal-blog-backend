import { Injectable } from '@nestjs/common';

@Injectable()
export class ForbiddenOperationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

@Injectable()
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}
