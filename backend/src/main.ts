import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT ?? 3001;
// const HOST = process.env.HOST ?? '127.0.0.1';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cookieParser());

  app.enableCors({
    origin: true,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  await app.listen(PORT, 'localhost', () => {
    console.log(`Server started on ${PORT}:${'localhost'}`);
  });
}
void bootstrap();
