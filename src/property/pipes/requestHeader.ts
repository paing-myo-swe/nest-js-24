import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

export const RequestHeader = createParamDecorator(
  async (targetTo: any, cxt: ExecutionContext) => {
    const headers = cxt.switchToHttp().getRequest().headers;
    const dto = plainToInstance(targetTo, headers, {
      excludeExtraneousValues: true,
    });
    await validateOrReject(dto);
    return dto;
  },
);
