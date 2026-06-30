import { IsString, IsNotEmpty } from 'class-validator';

export class SignINDto {
  @IsNotEmpty()
  @IsString()
  email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;
}
