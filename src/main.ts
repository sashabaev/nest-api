import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import CONFIG from './config/config';
import './config/db';

const PORT = CONFIG.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  await app.listen(PORT);
  console.log(`Server is listening on ${PORT}`);
}
bootstrap();
