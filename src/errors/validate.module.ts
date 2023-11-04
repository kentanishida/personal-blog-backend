import { Module } from '@nestjs/common';
import { ValidateService } from './validate.service';
import { ErrorsModule } from './errors.module';

@Module({
  imports: [ErrorsModule],
  providers: [ValidateService],
  exports: [ValidateService],
})
export class ValidateModule {}
