---
id: bug-report
title: Bug Report
---

## Create bug report

<span class="badge badge--warning">Require authentication</span>

Create a bug report

```ts
const bugReport = await bugReport(client).createBugReport(data: BugReportInputDto);
```

```ts
interface BugReportInputDto {
  osName: string,
  browserName: string,
  windowHeight: number,
  windowWidth: number,
  contactEmail: string,
  message: string,
}
```
This call returns an [IBugReport](bug-report-types#ibugreport) object.

## Get all bug reports

<span class="badge badge--warning">Require authentication</span>

Allows you to get all bug reports

```ts
const bugReports = await bugReport(client).getBugReports();
```

Return a [paginated](pagination#pagination) array of [IBugReport](bug-report-types#ibugreport) object.

## Get bug report by id

<span class="badge badge--warning">Require authentication</span>

Allows you to get bug report by id

```ts
const bugReports = await bugReport(client).getBugReportById(id: string);
```

This call returns an [IBugReport](bug-report-types#ibugreport) object.