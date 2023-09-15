# Frontend-ui project

### Step 1: add environments
```
npx nx g @nx/angular:environments --project=frontend-ui
```

### Step 2: add angular material
```
npm i @angular/material @angular/cdk --save
```

### Step 3: install dependiency
```
npm install @microsoft/applicationinsights-web@latest
npm i @microsoft/applicationinsights-perfmarkmeasure-js --save
```

## Reference
[Monitoring Live Angular Apps with Application Insights](https://onthecode.co.uk/blog/monitoring-live-angular-apps-with-azure-application-insights)

[Angular How-to: Add Application Insights to an Angular SPA](https://devblogs.microsoft.com/premier-developer/angular-how-to-add-application-insights-to-an-angular-spa/)

[Microsoft Application Insights JavaScript SDK - Performance Mark and Measure Plugin](https://github.com/microsoft/ApplicationInsights-JS/blob/main/extensions/applicationinsights-perfmarkmeasure-js/README.md)

[Monitoring preformance](https://github.com/microsoft/ApplicationInsights-JS/blob/master/docs/PerformanceMonitoring.md)

[Debug plugin extension (Beta)](https://github.com/microsoft/ApplicationInsights-JS/blob/master/extensions/applicationinsights-debugplugin-js/README.md)