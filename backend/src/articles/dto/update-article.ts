import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateArticleDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  text!: string;

  @IsString()
  @IsOptional()
  description!: string;

  @IsString()
  @IsNotEmpty()
  tags!: string;
}
