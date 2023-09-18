import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AILoggerService } from './services/appinsight.logger.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['./.env'],
      isGlobal: true, //so we don't have to add ConfigModule to imports of sub-modules
  })],
  controllers: [AppController],
  providers: [AppService, AILoggerService,
    {
      provide: 'Applicationinsights',
      useValue: require('applicationinsights'),
    }
  ],
})
export class AppModule {}
