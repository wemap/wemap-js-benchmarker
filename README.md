### Requirements

> Wemap's benchmark app, use [ExpressJS](http://expressjs.com/fr/) and [Benchmark.js](https://github.com/bestiejs/benchmark.js)

##### Install project dependencies

```bash
npm install
```

##### Install `kiss-cli` helper to create new benchmark suites

```bash
npm install -g kiss-cli
```

### DOM Manipulation benchmark

##### Single suite

Create a new test suite in `suites` folder
```bash
kiss suites/<my_suite_name>.suite
```

Add new suite into `suites/_index.js` collection

(re)start NodeJS benchmark server
```bash
npm start
```

> By default NodeJS server will start under port `9080`.
> You can define a custom `PORT` variable in `.env` in the root directory of your project.
