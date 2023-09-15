import { ApplicationConfig, ErrorHandler } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { ApplicationInsights, IConfig, IConfiguration } from '@microsoft/applicationinsights-web';
import { environment } from '../environments/environment';
import { GlobalErrorHandler } from './services/global-error-handler';
import { DebugPlugin } from '@microsoft/applicationinsights-debugplugin-js';

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
  const toTrack = [
    'trackEvent',
    'trackPageView',
    'trackPageViewPerformance',
    'trackException',
    'trackTrace',
    'trackMetric',
    'trackDependencyData',
    'throwInternal',        // called when a message is logged internally
    'logInternalMessage',   // called when a message is logged internally
    'triggerSend',          // called when data is queued to be sent to the server
    '_sender',              // called when data is sent to the server
  ];
  
  const debugPluginInstance = new DebugPlugin();

  const config: IConfig & IConfiguration = {
    connectionString: environment.appInsights.connectionstring,
    disableTelemetry: false,
    enableCorsCorrelation: true,
    extensions: [debugPluginInstance],
    extensionConfig: {
      [DebugPlugin.identifier]: {
        trackers: toTrack
      }
    }
  };

  // send telemetry immediately for dev environment 
  if (!environment.production) {
    config.maxBatchInterval = 0;
    config.maxBatchSizeInBytes = 0;
    config.loggingLevelConsole = 2; //log internal app insights errors to console
  }

  return new ApplicationInsights({ config: config });
}
