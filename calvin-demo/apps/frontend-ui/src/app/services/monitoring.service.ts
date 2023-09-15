import { Injectable } from "@angular/core";
import { ApplicationInsights, SeverityLevel } from "@microsoft/applicationinsights-web";
import { PerfMarkMeasureManager } from '@microsoft/applicationinsights-perfmarkmeasure-js';
//import { environment } from '../../environments/environment';

@Injectable({ providedIn: "root" })
export class MonitoringService {
  
  constructor(private readonly appInsights: ApplicationInsights) {
    this.appInsights.loadAppInsights();

    // window.performance will now contain 
    // - a mark called 'ai.prfmrk.code'
    // - a measure called 'ai.prf.msr.code'
    // monitoring preformance in debug plugin extension (Beta)
    // https://github.com/microsoft/ApplicationInsights-JS/blob/master/extensions/applicationinsights-debugplugin-js/README.md
    // More Details:
    // https://github.com/microsoft/ApplicationInsights-JS/blob/master/docs/PerformanceMonitoring.md
    this.appInsights.core.setPerfMgr(new PerfMarkMeasureManager());

    /*
    this.appInsights.setAuthenticatedUserContext("USER_EMAIL");

    this.appInsights.addTelemetryInitializer(envelope => {
      envelope.tags = envelope.tags || [];
      envelope.tags.push({ "ai.cloud.role": "MyApp.Web" });
      envelope.data = {
        environment: environment.id
      };
    });*/
  }

  logError(error: Error): void {
    this.appInsights.trackException({ exception: error });
  }

  logInfo(message: string): void {
    this.appInsights.trackTrace({ message: message, severityLevel: SeverityLevel.Information });
  }

  logPageView(componentId: string, url: string = window.location.pathname): void {
    this.appInsights.trackPageView({ name: componentId, uri: url });
  }

  logEvent(name: string, properties: any): void {
    properties.url = window.location.pathname;
    this.appInsights.trackEvent({ name, properties: properties });
  }
}