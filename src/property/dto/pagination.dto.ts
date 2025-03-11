import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsInt()
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsInt()
  @IsOptional()
  @IsPositive()
  skip: number;
}
