import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
const globalPrefix = 'api/v1';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Diablo 4 Build Compare')
    .setDescription(' The Build Compare API allows users to compare their current build with a target build they are following or with builds created by their friends. This API provides endpoints to fetch, compare, and display differences between builds, helping users optimize and improve their configurations.')
    .setVersion('1.0')

    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, { useGlobalPrefix: true });

  await app.listen(3000);
}
bootstrap();
