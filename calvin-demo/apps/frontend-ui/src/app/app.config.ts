import { ApplicationConfig, ErrorHandler } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { ApplicationInsights, IConfig, IConfiguration } from '@microsoft/applicationinsights-web';
import { environment } from '../environments/environment';
import { GlobalErrorHandler } from './services/global-error-handler';
import { ClickAnalyticsPlugin } from '@microsoft/applicationinsights-clickanalytics-js';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: ApplicationInsights,
      useFactory: appInsightsFactory
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation())
  ],
};

export function appInsightsFactory(): ApplicationInsights {
  const clickPluginInstance = new ClickAnalyticsPlugin();
  // Click Analytics configuration
  const clickPluginConfig = {
    autoCapture: true
  };
  const config: IConfig & IConfiguration = {
    connectionString: environment.appInsights.connectionstring,
    disableTelemetry: false,
    enableCorsCorrelation: true,
    extensions: [clickPluginInstance],
    extensionConfig: {
      [clickPluginInstance.identifier]: clickPluginConfig
    },
  };

  // send telemetry immediately for dev environment 
  if (!environment.production) {
    config.maxBatchInterval = 0;
    config.maxBatchSizeInBytes = 0;
    config.loggingLevelConsole = 2; //log internal app insights errors to console
  }

  return new ApplicationInsights({ config: config });
}
