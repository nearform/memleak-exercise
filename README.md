# Track down a memory leak

This application has a memory leak.

You can use [clinic heapprofiler](https://clinicjs.org/heapprofiler/) to track the memory allocations and [clinic doctor](https://clinicjs.org/doctor/) to diagnose the application.

The goal __is to identify and fix the memory leak__.

## Prerequisites

Run `npm install` in this folder.

## To launch the app

Run:

```
npm start
```

To trigger the memory leak:

```
npm test
```

## Using climem

climem is a tool to visualize the memory consumption of your process
in the terminal.

This is already set up for you in this app, run:

```
npm run with-climem
```

to run the application with climem support

Then, launch climem

```
npm run climem
```

## Using heapprofiler

Run `clinic heapprofiler` to track the memory allocation:

```
npm run heapprofiler
```
