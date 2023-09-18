import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AILoggerService {
  constructor(
    @Inject('Applicationinsights') private readonly applicationinsights,
    private readonly configService: ConfigService
  ) {
    applicationinsights
    // Configure with environment variable: APPLICATIONINSIGHTS_CONNECTION_STRING
    // .setup() can be called with no arguments.
    .setup(this.configService.get('APPLICATION_INSIGHTS_CONNECTION_STRING'))
    // With this option set, the SDK can track context across asynchronous callbacks in Node.js.
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(false)
    .setUseDiskRetryCaching(true)
    // Enable Live Metrics
    .setSendLiveMetrics(true)
    // Automatic web Instrumentation[Preview]: APPLICATIONINSIGHTS_WEB_INSTRUMENTATION_ENABLED = true
    // Or manually enable web instrumentation
    //.enableWebInstrumentation(true)
    //.setDistributedTracingMode(applicationinsights.DistributedTracingModes.AI);

    
    // By default, the SDK sends all collected data to the Application Insights service.
    // Setting samplingPercentage to 100 (the default) means all data will be sent, 
    // and 0 means nothing will be sent.
    // applicationinsights.defaultClient.config.samplingPercentage = 33;

    // Multiple roles for multi-component applications
    // applicationinsights.defaultClient.context.tags[applicationinsights.defaultClient.context.keys.cloudRole] = "MyRoleName";

  }

  initialize() {
    this.applicationinsights.start();
  }

 
  logDetails(level, log) {
    const { defaultClient } = this.applicationinsights;
    if (level === 'error') {
      defaultClient.trackException({
        exception: new Error(
          `${level}: ${log}`,
        ),
      });
    } else {
      defaultClient.trackTrace({
        message: `${level}: ${log}`,
      });
    }
    defaultClient.flush();
  }

  error(message: string) {
    this.logDetails('error', message);
  }

  warn(message: string) {
    this.logDetails('warn', message);
  }

  info(message: string) {
    this.logDetails('info', message);
  }

  debug(message: string) {
    this.logDetails('debug', message);
  }

  log(message: string) {
    this.logDetails('info', message);
  }
}
