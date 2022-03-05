import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config: ConfigService = app.get<ConfigService>(ConfigService);

  const port = config.get('PORT') || 3000;
  const mode = config.get('MODE');

  await app.listen(port, () => {
    if (mode == 'development') {
      console.log(`Connect to port ${port}`);
    }
  });
}
bootstrap();
