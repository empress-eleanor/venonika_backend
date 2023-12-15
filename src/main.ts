import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { API_PORT, WEBSITE_URL } from './constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: WEBSITE_URL,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });
  await app.listen(API_PORT);
}

bootstrap();
