import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { AILoggerService } from './services/appinsight.logger.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logService: AILoggerService
    ) {
      this.logService.initialize();
    }

  @Get()
  getData() {
    return this.appService.getData();
  }
}
