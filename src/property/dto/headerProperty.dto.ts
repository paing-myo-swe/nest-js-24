import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class HeaderPropertyDto {
  @IsString()
  @Expose({ name: 'access-token' })
  accessToken: string;
}
