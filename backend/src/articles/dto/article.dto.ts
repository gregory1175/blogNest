import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsDate,
} from 'class-validator';
import { ArticleEntity } from '../../shared/modules/article.entity';

export class ArticleDto {
  @IsNumber()
  @IsNotEmpty()
  id!: number;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  text!: string;

  @IsOptional()
  @IsString()
  description!: string | null;

  @IsString()
  @IsNotEmpty()
  tags!: string;

  @IsDate()
  @IsNotEmpty()
  createdAt!: Date;

  @IsDate()
  @IsNotEmpty()
  updatedAt!: Date;

  constructor(ent: ArticleEntity) {
    this.id = ent.id;
    this.title = ent.title;
    this.text = ent.text;
    this.description = ent.description;
    this.tags = ent.tags;
    this.createdAt = ent.createdAt;
    this.updatedAt = ent.updatedAt;
  }
}
