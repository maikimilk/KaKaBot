import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = new ConfigService();
  const port = configService.get('API_PORT');

  const documentConfig = new DocumentBuilder()
    .setTitle('Kakabot')
    .setDescription('The Kakabot API description')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('docs', app, document);

  await app.listen(port);
}
bootstrap();
