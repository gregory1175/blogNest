import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from '../shared/modules/article.entity';
import { UserEntity } from '../shared/modules/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity, UserEntity])],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
