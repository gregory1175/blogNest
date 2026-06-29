import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article';
import { ArticleDto } from './dto/article.dto';

@Injectable()
export class ArticlesService {
  create(data: CreateArticleDto) {
    console.log('create', data);
    const article = new ArticleDto();
    article.title = data.title;
    article.text = data.text;
    article.description = data.description;
    article.tags = data.tags;
    article.createdAt = new Date();
    article.updatedAt = new Date();

    return article;
  }

  getList() {
    console.log('getList');
  }

  getById(id: number) {
    console.log(`getById ${id}`);
  }

  updateById(id: number) {
    console.log(`updateById ${id}`);
  }

  deleteById(id: number) {
    console.log(`deleteById ${id}`);
  }
}
