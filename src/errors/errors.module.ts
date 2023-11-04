import { Module } from '@nestjs/common';
import { ForbiddenOperationError, ValidationError } from './errors.service';

@Module({
  imports: [],
  providers: [ForbiddenOperationError, ValidationError],
  exports: [ForbiddenOperationError, ValidationError],
})
export class ErrorsModule {}
