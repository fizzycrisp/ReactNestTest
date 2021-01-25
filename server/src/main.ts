import { APP_INTERCEPTOR, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const cors = require('cors');
  const app = await NestFactory.create(AppModule);  
  app.use(cors());
  const port = 3001;
  await app.listen(port, ()=> console.log(`Listening on port ${port}`));
}
bootstrap();
