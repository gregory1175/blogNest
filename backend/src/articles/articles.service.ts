import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article';
import { ArticleDto } from './dto/article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from '../shared/modules/article.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '../shared/modules/user.entity';
import { UpdateArticleDto } from './dto/update-article';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepo: Repository<ArticleEntity>, // аналог : typeof ArticleEntity
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async create(data: CreateArticleDto) {
    const user = await this.userRepo
      .findOne({
        where: {
          id: 1,
        },
      })
      .catch((e) => {
        console.log(e);
        return null;
      });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    const article = new ArticleEntity();
    article.title = data.title;
    article.text = data.text;
    article.description = data.description;
    article.tags = data.tags;
    article.author = user;

    // await this.articleRepo.save(article); // так можем сохранить несколько сущностей await this.articleRepo.save([article, article1]);
    const res = await article.save(); // так только 1 сущность

    return new ArticleDto(res);
  }

  async getList() {
    const articles = await this.articleRepo.find().catch((e) => {
      console.log(e);
      return [];
    });
    const atriclesMass = articles.map((item) => new ArticleDto(item));
    return atriclesMass;
  }

  async getById(id: number) {
    const article = await this.articleRepo
      .findOne({
        where: {
          id: id,
        },
      })
      .catch((e) => {
        console.log(e);
        return null;
      });
    if (!article) {
      throw new NotFoundException('Article not found');
    }
    return new ArticleDto(article);
  }

  async updateById(id: number, data: UpdateArticleDto) {
    await this.articleRepo
      .update(
        { id: id },
        {
          title: data.title,
          text: data.text,
          description: data.description,
          tags: data.tags,
        },
      )
      .catch((e) => {
        console.log(e);
      });

    return await this.getById(id);
  }

  async deleteById(id: number) {
    await this.articleRepo.delete(id);
  }
}
