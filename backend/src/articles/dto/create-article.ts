// тут фиксируются те поля которуе должен передать юзер чтобы создать сущность в БД, в данном случае article
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateArticleDto {
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
