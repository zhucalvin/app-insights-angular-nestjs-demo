import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AILoggerService } from './services/appinsight.logger.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AILoggerService,
    {
      provide: 'Applicationinsights',
      useValue: require('applicationinsights'),
    }
  ],
})
export class AppModule {}
