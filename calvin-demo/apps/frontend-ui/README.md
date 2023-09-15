# Frontend-ui project
The application insights click analytics plugin was implemented.

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
npm install --save @microsoft/applicationinsights-clickanalytics-js
```

## Reference
[Monitoring Live Angular Apps with Application Insights](https://onthecode.co.uk/blog/monitoring-live-angular-apps-with-azure-application-insights)

[Angular How-to: Add Application Insights to an Angular SPA](https://devblogs.microsoft.com/premier-developer/angular-how-to-add-application-insights-to-an-angular-spa/)

[Enable Click Analytics Auto-Collection plug-in](https://learn.microsoft.com/en-us/azure/azure-monitor/app/javascript-feature-extensions?tabs=npmpackage)