// тут фиксируются те поля которуе должен передать юзер чтобы создать сущность в БД, в данном случае article
export class CreateArticleDto {
  title: string;
  text: string;
  description: string;
  tags: string;
}
