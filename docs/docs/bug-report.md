---
id: bug-report
title: Bug Report
---

## Create bug report

<span class="badge badge--warning">Require authentication</span>

Create a bug report

```ts
const bugReport = await Sherl.bugReport.createBugReport({
  id: 'string',
  osName: 'string',
  browserName: 'string',
  windowHeight: number,
  windowWidth: number,
  contactEmail: 'string',
  message: 'string',
});
```

Return any.

## Get all bug reports

<span class="badge badge--warning">Require authentication</span>

Allows you to get all bug reports

```ts
const bugReports = await Sherl.bugReport.getBugReports();
```

Return a paginated array of IBugReport

## Get bug report by id

<span class="badge badge--warning">Require authentication</span>

Allows you to get bug report by id

```ts
const bugReports = await Sherl.bugReport.getBugReportById('id');
```

Return a IBugReport
