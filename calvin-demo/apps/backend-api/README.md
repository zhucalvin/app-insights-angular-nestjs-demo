# Backend-api project setup:

### Step 1: Install nest dependiency
```
npm install -D @nx/nest
```

### Step 2: generate NestJS backend-api application
```
npx nx g @nx/nest:app backend-api --directory apps\backend-api --frontendProject frontend-ui
```
### Step 3: Install configuration dependency:
```
npm i --save @nestjs/config
```
### Step 4: install dependency
```
npm install applicationinsights --save
```
 [Source code on Github](https://github.com/Microsoft/ApplicationInsights-Node.js)

### Step 5: Extended metrics (optional)
```
npm install applicationinsights-native-metrics
```
### Environment file in the folder: apps\backend-api\\.env
```
APPLICATION_INSIGHTS_CONNECTION_STRING=<your_application_insights_connection_string>
```

To enable sending extended native metrics from your app to Azure, install the separate native metrics package. The SDK automatically loads when it's installed and start collecting Node.js native metrics.

## Reference
[Monitor your Node.js services and apps with Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/nodejs)

[Microsoft Azure Monitor Application Insights JavaScript SDK configuration](https://learn.microsoft.com/en-us/azure/azure-monitor/app/javascript-sdk-configuration#sdk-configuration)

[Live metrics](https://learn.microsoft.com/en-us/azure/azure-monitor/app/nodejs#live-metrics)

[Application Insights API for custom events and metrics](https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-custom-events-metrics)