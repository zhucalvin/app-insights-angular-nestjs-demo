# Backend-api project setup:

### Step 1: Install nest dependiency
```
npm install -D @nx/nest
```

### Step 2: generate NestJS backend-api application
```
npx nx g @nx/nest:app backend-api --directory apps\backend-api --frontendProject frontend-ui
```

### Step 3: install dependency
```
npm install applicationinsights --save
```

## Reference
[Monitor your Node.js services and apps with Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/nodejs)

[Microsoft Azure Monitor Application Insights JavaScript SDK configuration](https://learn.microsoft.com/en-us/azure/azure-monitor/app/javascript-sdk-configuration#sdk-configuration)

[Live metrics](https://learn.microsoft.com/en-us/azure/azure-monitor/app/nodejs#live-metrics)
