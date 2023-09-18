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
    this.logService.error('Error message for testing !!!');
    this.logService.debug('Debuggig message for testing !!!');
    this.logService.info('Information message for testing !!!');
    this.logService.warn('Information message for testing !!!');
    return this.appService.getData();
  }
}
