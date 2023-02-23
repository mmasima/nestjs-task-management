import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await Ne stFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
