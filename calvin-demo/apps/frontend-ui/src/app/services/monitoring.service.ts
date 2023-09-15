import { Injectable } from "@angular/core";
import { ApplicationInsights, SeverityLevel } from "@microsoft/applicationinsights-web";
import { environment } from '../../environments/environment';

@Injectable({ providedIn: "root" })
export class MonitoringService {
  constructor(private readonly appInsights: ApplicationInsights) {
    this.appInsights.loadAppInsights();

    /*
    this.appInsights.setAuthenticatedUserContext("USER_EMAIL");

    this.appInsights.addTelemetryInitializer(envelope => {
      envelope.tags = envelope.tags || [];
      envelope.tags.push({ "ai.cloud.role": "MyApp.Web" });
      envelope.data = {
        environment: environment.id
      };
    });*/


    /* Another way to connect to Application Insights resource:
    this.appInsights = new ApplicationInsights({
      config: {
        connectionString: environment.appInsights.connectionstring,
        enableAutoRouteTracking: true // option to log all route changes
      }
    });
    this.appInsights.loadAppInsights();
    */
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