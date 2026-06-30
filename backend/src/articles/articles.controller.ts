import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article';
import { UpdateArticleDto } from './dto/update-article';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly service: ArticlesService) {}
  // Метод для создане статей
  // http://127.0.0.1:3000/articles HTTP method = POST
  @Post()
  create(@Body() data: CreateArticleDto) {
    return this.service.create(data);
  }

  // Метод для получение одной статьи по ее id
  // http://127.0.0.1:3000/articles HTTP method = GET
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }
  // Метод для получение списка статей
  // http://127.0.0.1:3000/articles/1 HTTP method = GET
  @Get()
  getList() {
    return this.service.getList();
  }
  // Метод для обновления нашей статьи по ее id
  // http://127.0.0.1:3000/articles/1 HTTP method = PUT
  @Put(':id')
  updateById(@Param('id') id: number, @Body() data: UpdateArticleDto) {
    return this.service.updateById(id, data);
  }
  // Метод для удаление нашей статьи по ее id
  // http://127.0.0.1:3000/articles/1 HTTP method = DELETE
  @Delete(':id')
  deleteByID(@Param('id') id: number) {
    return this.service.deleteById(id);
  }
  // CREATE READ UPDATE DELETE  CRUD
}
