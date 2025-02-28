import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 20, { message: 'The name must be between 5 and 20 characters' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 50, {
    message: 'The description must be between 10 and 50 characters',
    groups: ['create'],
  })
  @Length(10, 100, {
    message: 'The description must be between 10 and 100 characters',
    groups: ['update'],
  })
  description: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  price: number;
}
