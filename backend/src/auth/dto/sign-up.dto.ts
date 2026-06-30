import { IsString, IsNotEmpty } from 'class-validator';

export class SignUpDto {
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsString()
  email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsNotEmpty()
  @IsString()
  repeatPassword!: string;
}
