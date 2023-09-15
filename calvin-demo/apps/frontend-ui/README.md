# Frontend-ui project
The application insights for web was implemented.

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
```

## Reference
[Monitoring Live Angular Apps with Application Insights](https://onthecode.co.uk/blog/monitoring-live-angular-apps-with-azure-application-insights)

[Angular How-to: Add Application Insights to an Angular SPA](https://devblogs.microsoft.com/premier-developer/angular-how-to-add-application-insights-to-an-angular-spa/)

[Alternative way to protect your Application Insights “Instrumentation Key” in JavaScript](https://devblogs.microsoft.com/premier-developer/alternative-way-to-protect-your-application-insights-instrumentation-key-in-javascript/)